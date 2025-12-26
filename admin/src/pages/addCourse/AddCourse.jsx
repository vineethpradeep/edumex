import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaTrash,
  FaChevronDown,
  FaChevronUp,
  FaLayerGroup,
  FaTags,
  FaExclamationCircle,
} from "react-icons/fa";
import "./addCourse.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import useModal from "../../hooks/useModal";
import Modal from "../../components/modal/Modal";
import Card from "../../components/card/Card";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
export default function AddCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  const [submitting, setSubmitting] = useState(false);
  const { isOpen, config, openModal, confirm, cancel } = useModal();
  const LEVEL_OPTIONS = ["Diploma", "Certificate", "Level 5", "Level 6"];

  const initialForm = {
    category: "",
    level: [],
    customLevel: "",
    title: "",
    description: "",
    entryRequirements: "",
    assessments: "",
    image: null,
    badge: "",
    courseBudget: "",
    credits: "",
    duration: "",
    modes: [],
    tags: [],
    whatYouLearn: [],
    courseStructure: [],
    subcourses: [],
  };

  const [form, setForm] = useState(initialForm);
  const [tagInput, setTagInput] = useState("");
  const [whatYouLearnInput, setWhatYouLearnInput] = useState("");
  const [errors, setErrors] = useState({});
  const [, setSubmitStatus] = useState("");

  const modes = [
    "Blended learning",
    "Online",
    "Face-to-face",
    "Flexible virtual sessions",
  ];

  // --- Normalize API data ---
  const normalizeCourse = (course) => ({
    category: course.category || "",
    // level: Array.isArray(course.level) ? course.level : [],
    level: (() => {
      if (Array.isArray(course.level)) return course.level;

      if (typeof course.level === "string") {
        try {
          const parsed = JSON.parse(course.level);
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      }

      return [];
    })(),
    customLevel: "",
    title: course.title || "",
    description: course.description || "",
    entryRequirements: course.entryRequirements || "",
    assessments: course.assessments || "",
    image: course.image || null,
    badge: course.badge || "",
    courseBudget: course.courseBudget || "",
    credits: course.credits || "",
    duration: course.duration || "",
    modes: course.modes || [],
    tags: course.tags || [],
    whatYouLearn: course.whatYouLearn || [],
    // Map parent modules to courseStructure
    courseStructure: (course.modules || []).map((m) => ({
      id: m.id,
      module: m.module_name,
      units: m.units || [],
      open: true,
    })),
    // Map subcourses and ensure they have courseStructure
    subcourses: (course.subcourses || []).map((sc) => ({
      ...sc,
      courseStructure: sc.modules
        ? sc.modules.map((m) => ({
            id: m.id,
            module: m.module_name,
            units: m.units || [],
            open: true,
          }))
        : [],
      whatYouLearn: sc.whatYouLearn || [],
      whatYouLearnInput: "",
      open: true,
    })),
  });

  // Fetch course if edit mode
  useEffect(() => {
    if (!isEditMode) return;

    async function fetchCourse() {
      try {
        const res = await fetch(`${API_URL}/getSingleCourse.php?id=${id}`);
        const data = await res.json();

        if (data.success) {
          setForm(normalizeCourse(data.course));
        } else {
          setSubmitStatus("Failed to load course: " + data.message);
        }
      } catch (err) {
        setSubmitStatus("Error fetching course: " + err.message);
      }
    }

    fetchCourse();
  }, [id, isEditMode]);

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!form.category) newErrors.category = "Category is required";
    // if (!form.level) newErrors.level = "Level is required";
    if (!form.level || form.level.length === 0) {
      newErrors.level = "At least one level is required";
    }
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.description.trim())
      newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) {
  //     openModal({
  //       title: "Validation Error",
  //       message: "Please fix validation errors",
  //       confirmText: "OK",
  //     });
  //     return;
  //   }

  //   setSubmitting(true);

  //   try {
  //     const url = isEditMode
  //       ? `${API_URL}/update_course.php?id=${id}`
  //       : `${API_URL}/add_course.php`;

  //     const bodyData = { ...form };

  //     let result;
  //     if (bodyData.image instanceof File) {
  //       const formData = new FormData();
  //       Object.keys(bodyData).forEach((key) => {
  //         if (
  //           key === "courseStructure" ||
  //           key === "subcourses" ||
  //           key === "modes" ||
  //           key === "tags" ||
  //           key === "whatYouLearn"
  //         ) {
  //           formData.append(key, JSON.stringify(bodyData[key]));
  //         } else {
  //           formData.append(key, bodyData[key]);
  //         }
  //       });
  //       const response = await fetch(url, { method: "POST", body: formData });
  //       result = await response.json();
  //     } else {
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(bodyData),
  //       });
  //       result = await response.json();
  //     }

  //     handleResponse(result);
  //   } catch (err) {
  //     openModal({
  //       title: "Error",
  //       message: "Failed to submit course: " + err.message,
  //       confirmText: "OK",
  //     });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      openModal({
        title: "Validation Error",
        message: "Please fix validation errors",
        confirmText: "OK",
      });
      return;
    }

    setSubmitting(true);

    try {
      const url = isEditMode
        ? `${API_URL}/update_course.php?id=${id}`
        : `${API_URL}/add_course.php`;

      // MERGE LEVEL + CUSTOM LEVEL
      const finalLevels = Array.isArray(form.level) ? [...form.level] : [];

      if (form.customLevel && form.customLevel.trim()) {
        finalLevels.push(form.customLevel.trim());
      }

      // CLEAN & PREPARE PAYLOAD
      const bodyData = {
        ...form,
        level: finalLevels,
      };

      delete bodyData.customLevel;

      let result;

      // MULTIPART (IMAGE UPLOAD)
      if (bodyData.image instanceof File) {
        const formData = new FormData();

        Object.keys(bodyData).forEach((key) => {
          if (
            key === "courseStructure" ||
            key === "subcourses" ||
            key === "modes" ||
            key === "tags" ||
            key === "whatYouLearn" ||
            key === "level"
          ) {
            formData.append(key, JSON.stringify(bodyData[key]));
          } else if (bodyData[key] !== null && bodyData[key] !== undefined) {
            formData.append(key, bodyData[key]);
          }
        });

        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        result = await response.json();
      } else {
        // JSON REQUEST
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyData),
        });

        result = await response.json();
      }

      handleResponse(result);
    } catch (err) {
      openModal({
        title: "Error",
        message: "Failed to submit course: " + err.message,
        confirmText: "OK",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Handle API response
  const handleResponse = (result) => {
    if (result.success) {
      openModal({
        title: isEditMode ? "Course Updated" : "Course Added",
        message: isEditMode
          ? "Course updated successfully!"
          : "Course added successfully!",
        confirmText: "OK",
        onConfirm: () => {
          // if (!isEditMode) setForm(initialForm);
          // setErrors({});
          // if (!isEditMode) {
          //   navigate(`/course/${result.courseId}`);
          // } else {
          //   navigate(`/view-all-courses`);
          // }
          // navigate(isEditMode ? `/course/${id}` : `/view-all-courses`);
          navigate(`/view-all-courses`);
        },
      });
    } else {
      openModal({
        title: "Error",
        message: result.message || "Something went wrong",
        confirmText: "OK",
      });
    }
  };

  // --- Generic helpers for arrays ---
  const toggleMode = (mode) =>
    setForm((prev) => ({
      ...prev,
      modes: prev.modes.includes(mode)
        ? prev.modes.filter((m) => m !== mode)
        : [...prev.modes, mode],
    }));

  const addTag = () => {
    if (!tagInput.trim()) return;
    setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
    setTagInput("");
  };
  const removeTag = (tag) =>
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));

  const addWhatYouLearn = () => {
    if (!whatYouLearnInput.trim()) return;
    setForm((prev) => ({
      ...prev,
      whatYouLearn: [...(prev.whatYouLearn || []), whatYouLearnInput.trim()],
    }));
    setWhatYouLearnInput("");
  };
  const removeWhatYouLearn = (item) =>
    setForm((prev) => ({
      ...prev,
      whatYouLearn: prev.whatYouLearn.filter((w) => w !== item),
    }));

  // --- Subcourses ---
  const addSubcourse = () =>
    setForm((prev) => ({
      ...prev,
      subcourses: [
        ...prev.subcourses,
        {
          id: Date.now(),
          title: "",
          overview: "",
          tags: [],
          whatYouLearn: [],
          whatYouLearnInput: "",
          courseStructure: [],
          open: true,
        },
      ],
    }));

  const removeSubcourse = (id) =>
    setForm((prev) => ({
      ...prev,
      subcourses: prev.subcourses.filter((sc) => sc.id !== id),
    }));

  const toggleSubcourseOpen = (id) =>
    setForm((prev) => ({
      ...prev,
      subcourses: prev.subcourses.map((sc) =>
        sc.id === id ? { ...sc, open: !sc.open } : sc
      ),
    }));

  // --- Subcourse learning points ---
  const addSubcourseWhatYouLearn = (subcourseId) => {
    setForm((prev) => ({
      ...prev,
      subcourses: prev.subcourses.map((sc) => {
        if (sc.id === subcourseId) {
          const value = (sc.whatYouLearnInput || "").trim();
          if (!value) return sc;
          return {
            ...sc,
            whatYouLearn: [...(sc.whatYouLearn || []), value],
            whatYouLearnInput: "",
          };
        }
        return sc;
      }),
    }));
  };
  const removeSubcourseWhatYouLearn = (subcourseId, item) =>
    setForm((prev) => ({
      ...prev,
      subcourses: prev.subcourses.map((sc) =>
        sc.id === subcourseId
          ? { ...sc, whatYouLearn: sc.whatYouLearn.filter((w) => w !== item) }
          : sc
      ),
    }));

  // --- Modules & Units ---
  const addModule = (subcourseId = null) => {
    const newModule = { id: Date.now(), module: "", units: [], open: true };
    if (subcourseId) {
      setForm((prev) => ({
        ...prev,
        subcourses: (prev.subcourses || []).map((sc) =>
          sc.id === subcourseId
            ? { ...sc, courseStructure: [...sc.courseStructure, newModule] }
            : sc
        ),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        courseStructure: [...prev.courseStructure, newModule],
      }));
    }
  };
  const removeModule = (moduleId, subcourseId = null) => {
    if (subcourseId) {
      setForm((prev) => ({
        ...prev,
        subcourses: prev.subcourses.map((sc) =>
          sc.id === subcourseId
            ? {
                ...sc,
                courseStructure: sc.courseStructure.filter(
                  (m) => m.id !== moduleId
                ),
              }
            : sc
        ),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        courseStructure: prev.courseStructure.filter((m) => m.id !== moduleId),
      }));
    }
  };
  const toggleModuleOpen = (moduleId, subcourseId = null) => {
    if (subcourseId) {
      setForm((prev) => ({
        ...prev,
        subcourses: prev.subcourses.map((sc) =>
          sc.id === subcourseId
            ? {
                ...sc,
                courseStructure: sc.courseStructure.map((m) =>
                  m.id === moduleId ? { ...m, open: !m.open } : m
                ),
              }
            : sc
        ),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        courseStructure: prev.courseStructure.map((m) =>
          m.id === moduleId ? { ...m, open: !m.open } : m
        ),
      }));
    }
  };
  const addUnit = (moduleId, subcourseId = null) => {
    const newUnit = { title: "", credits: "", icon: "bi bi-file-earmark-text" };
    if (subcourseId) {
      setForm((prev) => ({
        ...prev,
        subcourses: prev.subcourses.map((sc) =>
          sc.id === subcourseId
            ? {
                ...sc,
                courseStructure: sc.courseStructure.map((m) =>
                  m.id === moduleId ? { ...m, units: [...m.units, newUnit] } : m
                ),
              }
            : sc
        ),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        courseStructure: prev.courseStructure.map((m) =>
          m.id === moduleId ? { ...m, units: [...m.units, newUnit] } : m
        ),
      }));
    }
  };
  const removeUnit = (moduleId, unitIndex, subcourseId = null) => {
    if (subcourseId) {
      setForm((prev) => ({
        ...prev,
        subcourses: prev.subcourses.map((sc) =>
          sc.id === subcourseId
            ? {
                ...sc,
                courseStructure: sc.courseStructure.map((m) =>
                  m.id === moduleId
                    ? { ...m, units: m.units.filter((_, i) => i !== unitIndex) }
                    : m
                ),
              }
            : sc
        ),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        courseStructure: prev.courseStructure.map((m) =>
          m.id === moduleId
            ? { ...m, units: m.units.filter((_, i) => i !== unitIndex) }
            : m
        ),
      }));
    }
  };
  return (
    <div className="page-container">
      <PageHeader
        title={isEditMode ? "Edit Course" : "Add New Course"}
        breadcrumbs={[
          { label: "Dashboard", to: "/dashboard" },
          { label: "Courses", to: "/view-all-courses" },
          { label: isEditMode ? "Edit Course" : "Add Course" },
        ]}
        showBack={true}
      />
      <form onSubmit={handleSubmit}>
        {/* BASIC COURSE INFO */}
        <Card title="Main Course Information">
          <div className="grid-2">
            <div>
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="">Select Category</option>
                {["Qualification", "Certificate", "Diploma"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              {errors.category && (
                <div className="error-msg">
                  <FaExclamationCircle /> {errors.category}
                </div>
              )}
            </div>

            {/* <div>
              <label htmlFor="level">Level</label>
              <select
                id="level"
                name="level"
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value })}
              >
                <option value="">Select Level</option>
                {["Diploma", "Certificate", "Level 5", "Level 6"].map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
              {errors.level && (
                <div className="error-msg">
                  <FaExclamationCircle /> {errors.level}
                </div>
              )}
            </div> */}
            <div className="form-group">
              <label className="form-label">Course Levels *</label>

              {/* Multi-select dropdown */}
              <select
                multiple
                className="form-select"
                value={form.level}
                onChange={(e) => {
                  const values = Array.from(
                    e.target.selectedOptions,
                    (opt) => opt.value
                  );
                  setForm({ ...form, level: values });
                }}
              >
                {LEVEL_OPTIONS.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>

              {/* Manual input */}
              <div className="d-flex gap-2 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add custom level (eg: Advanced)"
                  value={form.customLevel}
                  onChange={(e) =>
                    setForm({ ...form, customLevel: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (
                      form.customLevel.trim() &&
                      !form.level.includes(form.customLevel.trim())
                    ) {
                      setForm({
                        ...form,
                        level: [...form.level, form.customLevel.trim()],
                        customLevel: "",
                      });
                    }
                  }}
                >
                  Add
                </button>
              </div>

              {/* Selected levels */}
              {form.level.length > 0 && (
                <div className="mt-2 d-flex flex-wrap gap-2 chips">
                  {form.level.map((lvl, idx) => (
                    <span key={idx} className="chip">
                      {lvl}{" "}
                      <FaTrash
                        className="trash-icon"
                        onClick={() =>
                          setForm({
                            ...form,
                            level: form.level.filter((l) => l !== lvl),
                          })
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Single Input Fields */}
          {[
            {
              id: "title",
              label: "Course Title *",
              type: "text",
              placeholder: "Course Name",
            },
            {
              id: "description",
              label: "Description *",
              type: "textarea",
              placeholder: "Course Description",
            },
            {
              id: "entryRequirements",
              label: "Entry Requirements",
              type: "text",
              placeholder: "Entry Requirements",
            },
            {
              id: "assessments",
              label: "Assessments",
              type: "text",
              placeholder: "Assessments",
            },
            { id: "badge", label: "Badge", type: "text", placeholder: "Badge" },
            {
              id: "courseBudget",
              label: "Course Budget",
              type: "number",
              placeholder: "Course Budget",
            },
            {
              id: "credits",
              label: "Credits",
              type: "text",
              placeholder: "Credits",
            },
            {
              id: "duration",
              label: "Duration",
              type: "text",
              placeholder: "8 Weeks",
            },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} style={{ marginBottom: "16px" }}>
              <label htmlFor={id}>{label}</label>
              {type === "textarea" ? (
                <textarea
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                ></textarea>
              ) : (
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                />
              )}
              {errors[id] && (
                <div className="error-msg">
                  <FaExclamationCircle /> {errors[id]}
                </div>
              )}
            </div>
          ))}

          {/* Image Input */}
          {/* Image Upload With Preview */}
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="image">Course Image</label>

            {/* Preview */}
            {form.image && (
              <div
                style={{
                  marginBottom: "10px",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <img
                  src={
                    form.image instanceof File
                      ? URL.createObjectURL(form.image)
                      : form.image // existing DB URL
                  }
                  alt="Preview"
                  style={{
                    width: "160px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                  }}
                />

                {/* Remove Button */}
                <button
                  type="button"
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      image: null,
                    }))
                  }
                >
                  ✕
                </button>
              </div>
            )}

            {/* Upload Input */}
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setForm({
                    ...form,
                    image: e.target.files[0],
                  });
                }
              }}
            />
          </div>
        </Card>

        {/* COURSE MODES */}
        <Card title="Course Modes">
          <div className="checkbox-group">
            {modes.map((m) => (
              <label key={m} className="checkbox-item">
                <input
                  type="checkbox"
                  name={`mode-${m}`}
                  checked={form.modes.includes(m)}
                  onChange={() => toggleMode(m)}
                />{" "}
                {m}
              </label>
            ))}
          </div>
        </Card>

        {/* TAGS */}
        <Card
          title="Tags"
          footer={
            <button type="button" className="btn-primary" onClick={addTag}>
              Add
            </button>
          }
        >
          <div className="input-row">
            <input
              id="tagInput"
              name="tagInput"
              type="text"
              placeholder="Add tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
          </div>
          <div className="chips">
            {form.tags.map((t, i) => (
              <div key={i} className="chip">
                {t}{" "}
                <FaTrash
                  className="trash-icon"
                  onClick={() => removeTag(t)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* WHAT YOU LEARN */}
        <Card
          title="What You Learn"
          footer={
            <button
              type="button"
              className="btn-primary"
              onClick={addWhatYouLearn}
            >
              Add
            </button>
          }
        >
          <div className="input-row">
            <input
              id="whatYouLearnInput"
              type="text"
              placeholder="Add learning point"
              value={whatYouLearnInput}
              onChange={(e) => setWhatYouLearnInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addWhatYouLearn();
                }
              }}
            />
          </div>

          <div className="chips">
            {(form.whatYouLearn || []).map((w, i) => (
              <div key={i} className="chip">
                {w}{" "}
                <FaTrash
                  className="trash-icon"
                  onClick={() => removeWhatYouLearn(w)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* MODULES AT PARENT LEVEL */}
        <Card
          title="Modules (Parent Course)"
          footer={
            <button
              type="button"
              className="btn-primary"
              onClick={() => addModule()}
            >
              <FaPlus /> Add Module
            </button>
          }
        >
          {(form.courseStructure || []).map((m, moduleIndex) => (
            <div key={m.id} className="module-box">
              <div
                className="subcourse-header"
                onClick={() => toggleModuleOpen(m.id)}
              >
                <h5>{m.module || "Untitled Module"}</h5>
                <div className="subcourse-actions">
                  {m.open ? <FaChevronUp /> : <FaChevronDown />}
                  <FaTrash
                    className="ms-2 trash-icon"
                    onClick={() => removeModule(m.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              {m.open && (
                <div className="subcourse-body">
                  <label htmlFor={`module-${moduleIndex}`}>Module Name</label>
                  <input
                    id={`module-${moduleIndex}`}
                    name={`module-${moduleIndex}`}
                    type="text"
                    placeholder="Module Name"
                    value={m.module}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        courseStructure: (form.courseStructure || []).map(
                          (mm) =>
                            mm.id === m.id
                              ? { ...mm, module: e.target.value }
                              : mm
                        ),
                      })
                    }
                  />
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => addUnit(m.id)}
                  >
                    Add Unit
                  </button>
                  {(m.units || []).map((u, unitIndex) => (
                    <div key={unitIndex} className="unit-row">
                      <input
                        id={`module-${moduleIndex}-unit-${unitIndex}-title`}
                        name={`module-${moduleIndex}-unit-${unitIndex}-title`}
                        type="text"
                        placeholder="Unit Title"
                        value={u.title}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            courseStructure: (form.courseStructure || []).map(
                              (mm) =>
                                mm.id === m.id
                                  ? {
                                      ...mm,
                                      units: (mm.units || []).map((uu, j) =>
                                        j === unitIndex
                                          ? { ...uu, title: e.target.value }
                                          : uu
                                      ),
                                    }
                                  : mm
                            ),
                          })
                        }
                      />
                      <input
                        className="credits-input"
                        id={`module-${moduleIndex}-unit-${unitIndex}-credits`}
                        name={`module-${moduleIndex}-unit-${unitIndex}-credits`}
                        type="text"
                        placeholder="Credits"
                        value={u.credits}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            courseStructure: (form.courseStructure || []).map(
                              (mm) =>
                                mm.id === m.id
                                  ? {
                                      ...mm,
                                      units: (mm.units || []).map((uu, j) =>
                                        j === unitIndex
                                          ? { ...uu, credits: e.target.value }
                                          : uu
                                      ),
                                    }
                                  : mm
                            ),
                          })
                        }
                      />
                      <FaTrash
                        className="ms-2 trash-icon"
                        onClick={() => removeUnit(m.id, unitIndex)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Card>

        {/* SUBCOURSES */}
        <Card
          title="Subcourses"
          footer={
            <button
              type="button"
              className="btn-primary"
              onClick={addSubcourse}
            >
              <FaPlus /> Add Subcourse
            </button>
          }
        >
          {form.subcourses.map((sc, scIndex) => (
            <div key={sc.id} className="subcourse-box">
              <div
                className="subcourse-header"
                onClick={() => toggleSubcourseOpen(sc.id)}
              >
                <h5 className="subcourse-title">
                  {sc.title || "Untitled Subcourse"}
                </h5>

                <div className="subcourse-actions">
                  <div className="toggle-icon">
                    {sc.open ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <FaTrash
                    className="trash-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSubcourse(sc.id);
                    }}
                  />
                </div>
              </div>

              {sc.open && (
                <div className="subcourse-body">
                  <label htmlFor={`subcourse-${scIndex}-title`}>
                    Subcourse Title
                  </label>
                  <input
                    id={`subcourse-${scIndex}-title`}
                    name={`subcourse-${scIndex}-title`}
                    type="text"
                    placeholder="Subcourse Name"
                    value={sc.title}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        subcourses: form.subcourses.map((s) =>
                          s.id === sc.id ? { ...s, title: e.target.value } : s
                        ),
                      })
                    }
                  />
                  <label htmlFor={`subcourse-${scIndex}-overview`}>
                    Overview
                  </label>
                  <textarea
                    id={`subcourse-${scIndex}-overview`}
                    name={`subcourse-${scIndex}-overview`}
                    placeholder="Overview"
                    value={sc.overview}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        subcourses: form.subcourses.map((s) =>
                          s.id === sc.id
                            ? { ...s, overview: e.target.value }
                            : s
                        ),
                      })
                    }
                  ></textarea>

                  {/* SUBCOURSE WHAT YOU LEARN */}
                  <label htmlFor={`subcourse-${scIndex}-whatYouLearn`}>
                    What You Learn
                  </label>
                  <div className="input-row">
                    <input
                      type="text"
                      placeholder="Add learning point"
                      value={sc.whatYouLearnInput || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setForm((prev) => ({
                          ...prev,
                          subcourses: prev.subcourses.map((s) =>
                            s.id === sc.id
                              ? { ...s, whatYouLearnInput: value }
                              : s
                          ),
                        }));
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addSubcourseWhatYouLearn(sc.id);
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => addSubcourseWhatYouLearn(sc.id)}
                    >
                      Add
                    </button>
                  </div>

                  <div className="chips">
                    {(sc.whatYouLearn || []).map((w, i) => (
                      <div key={i} className="chip">
                        {w}{" "}
                        <FaTrash
                          className="trash-icon"
                          onClick={() => removeSubcourseWhatYouLearn(sc.id, w)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* MODULES INSIDE SUBCOURSE */}
                  <div className="module-section">
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => addModule(sc.id)}
                    >
                      <FaPlus /> Add Module
                    </button>
                    {(sc.courseStructure || []).map((m, moduleIndex) => (
                      <div key={m.id} className="module-box">
                        <div
                          className="subcourse-header"
                          onClick={() => toggleModuleOpen(m.id, sc.id)}
                        >
                          <h5>{m.module || "Untitled Module"}</h5>
                          <div className="subcourse-actions">
                            {m.open ? <FaChevronUp /> : <FaChevronDown />}
                            <FaTrash
                              className="ms-2 trash-icon"
                              onClick={() => removeModule(m.id, sc.id)}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                        {m.open && (
                          <div className="subcourse-body">
                            <label
                              htmlFor={`subcourse-${scIndex}-module-${moduleIndex}`}
                            >
                              Module Name
                            </label>
                            <input
                              id={`subcourse-${scIndex}-module-${moduleIndex}`}
                              name={`subcourse-${scIndex}-module-${moduleIndex}`}
                              type="text"
                              placeholder="Module Name"
                              value={m.module}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  subcourses: form.subcourses.map((s) =>
                                    s.id === sc.id
                                      ? {
                                          ...s,
                                          courseStructure:
                                            s.courseStructure.map((mm) =>
                                              mm.id === m.id
                                                ? {
                                                    ...mm,
                                                    module: e.target.value,
                                                  }
                                                : mm
                                            ),
                                        }
                                      : s
                                  ),
                                })
                              }
                            />
                            <button
                              type="button"
                              className="btn-primary"
                              onClick={() => addUnit(m.id, sc.id)}
                            >
                              Add Unit
                            </button>
                            {(m.units || []).map((u, unitIndex) => (
                              <div key={unitIndex} className="unit-row">
                                <input
                                  id={`subcourse-${scIndex}-module-${moduleIndex}-unit-${unitIndex}-title`}
                                  name={`subcourse-${scIndex}-module-${moduleIndex}-unit-${unitIndex}-title`}
                                  type="text"
                                  placeholder="Unit Title"
                                  value={u.title}
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      subcourses: (form.subcourses || []).map(
                                        (s) =>
                                          s.id === sc.id
                                            ? {
                                                ...s,
                                                courseStructure:
                                                  s.courseStructure.map((mm) =>
                                                    mm.id === m.id
                                                      ? {
                                                          ...mm,
                                                          units: (
                                                            mm.units || []
                                                          ).map((uu, j) =>
                                                            j === unitIndex
                                                              ? {
                                                                  ...uu,
                                                                  title:
                                                                    e.target
                                                                      .value,
                                                                }
                                                              : uu
                                                          ),
                                                        }
                                                      : mm
                                                  ),
                                              }
                                            : s
                                      ),
                                    })
                                  }
                                />
                                <input
                                  id={`subcourse-${scIndex}-module-${moduleIndex}-unit-${unitIndex}-credits`}
                                  className="credits-input"
                                  name={`subcourse-${scIndex}-module-${moduleIndex}-unit-${unitIndex}-credits`}
                                  type="text"
                                  placeholder="Credits"
                                  value={u.credits}
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      subcourses: form.subcourses.map((s) =>
                                        s.id === sc.id
                                          ? {
                                              ...s,
                                              courseStructure:
                                                s.courseStructure.map((mm) =>
                                                  mm.id === m.id
                                                    ? {
                                                        ...mm,
                                                        units: (
                                                          mm.units || []
                                                        ).map((uu, j) =>
                                                          j === unitIndex
                                                            ? {
                                                                ...uu,
                                                                credits:
                                                                  e.target
                                                                    .value,
                                                              }
                                                            : uu
                                                        ),
                                                      }
                                                    : mm
                                                ),
                                            }
                                          : s
                                      ),
                                    })
                                  }
                                />
                                <FaTrash
                                  className="ms-2 trash-icon"
                                  onClick={() =>
                                    removeUnit(m.id, unitIndex, sc.id)
                                  }
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </Card>

        <div className="form-actions">
          <button type="submit" className="btn-accept" disabled={submitting}>
            {submitting
              ? "Submitting..."
              : isEditMode
              ? "Update Course"
              : "Submit Course"}
          </button>
          {/* {submitStatus && <div className="submit-status">{submitStatus}</div>} */}
        </div>
      </form>
      <Modal
        isOpen={isOpen}
        title={config.title}
        message={config.message}
        onConfirm={confirm}
        onCancel={cancel}
        confirmText={config.confirmText}
        cancelText={config.cancelText}
      />
    </div>
  );
}
