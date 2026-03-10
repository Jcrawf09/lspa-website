'use client';
import { useState, useRef } from "react";

/*
 * LSPA Forms & Resources Page — v2
 * ─────────────────────────────────
 * Each form has download + upload in one place.
 * Submissions → lauraspelmanacademy@verizon.net via Web3Forms
 */

const ACCESS_KEY = "e9658441-788a-4bda-95f9-1abf712fc1a8";

// ─── Colors ──────────────────────────────────────────────────────────────
const c = {
  navy: "#1B2A4A", navyLight: "#243759", blue: "#2563EB", blueLight: "#DBEAFE",
  gold: "#F5A623", goldLight: "#FEF3C7", goldDark: "#D4891A",
  white: "#FFFFFF", cream: "#FFFDF7", gray50: "#F9FAFB", gray100: "#F3F4F6",
  gray200: "#E5E7EB", gray300: "#D1D5DB", gray400: "#9CA3AF", gray500: "#6B7280",
  gray600: "#4B5563", gray700: "#374151", gray800: "#1F2937",
  green: "#16A34A", greenLight: "#DCFCE7", red: "#DC2626", redLight: "#FEE2E2",
};

// ─── Form definitions ────────────────────────────────────────────────────
const forms = [
  {
    id: "open-enrollment",
    title: "Enrollment Application",
    titleEs: "Solicitud de Inscripción",
    desc: "District enrollment checklist, student information, eligibility verification, language survey, health forms, and family survey.",
    descEs: "Lista de verificación de inscripción del distrito, información del estudiante, verificación de elegibilidad, encuesta de idioma, formularios de salud y encuesta familiar.",
    icon: "📋",
    files: [
      { label: "English", href: "/forms/LSPA_Open_Enrollment_EN.pdf" },
      { label: "Español", href: "/forms/LSPA_Open_Enrollment_ES.pdf" },
    ],
    pages: "13 pages / páginas",
    uploadLabel: "Open Enrollment Checklist",
  },
  {
    id: "registration",
    title: "Registration Packet",
    titleEs: "Paquete de Registro",
    desc: "Complete registration forms including child info, emergency contacts, medical information, policies, and parent verification.",
    descEs: "Formularios de registro completos incluyendo información del niño, contactos de emergencia, información médica, políticas y verificación de padres.",
    icon: "📝",
    files: [
      { label: "English", href: "/forms/LSPA_Registration_Packet_EN.pdf" },
      { label: "Español", href: "/forms/LSPA_Registration_Packet_ES.pdf" },
    ],
    pages: "10 pages / páginas",
    uploadLabel: "Registration Packet",
  },
  {
    id: "social-media",
    title: "Social Media Release",
    titleEs: "Autorización de Redes Sociales",
    desc: "Consent form for photographs and video recordings to be used in school publications and social media.",
    descEs: "Formulario de consentimiento para fotografías y videos para uso en publicaciones escolares y redes sociales.",
    icon: "📸",
    files: [
      { label: "English / Español (Bilingual)", href: "/forms/LSPA_Social_Media_Release.pdf" },
    ],
    pages: "1 page / página",
    uploadLabel: "Social Media Release Form",
  },
];

// ─── Shared styles ───────────────────────────────────────────────────────
const labelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: c.gray700, marginBottom: 6 };
const labelEsStyle = { display: "block", fontSize: 11, fontWeight: 400, color: c.gray400, marginTop: 1 };
const reqStyle = { color: c.red, marginLeft: 2 };
const inputStyle = {
  width: "100%", padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${c.gray200}`,
  fontSize: 14, fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif",
  color: c.gray800, background: c.white, outline: "none", boxSizing: "border-box",
};
const errStyle = { display: "block", fontSize: 11, color: c.red, marginTop: 4, fontWeight: 500 };

// ─── Component ───────────────────────────────────────────────────────────
export default function FormsAndResources() {
  const [expandedForm, setExpandedForm] = useState(null);
  const [uploadState, setUploadState] = useState("idle");
  const [formData, setFormData] = useState({
    parentName: "", parentEmail: "", childName: "", phone: "", notes: "",
  });
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const uploadRefs = useRef({});

  // ─── Validation ────────────────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) errs.parentName = "Required / Requerido";
    if (!formData.parentEmail.trim()) errs.parentEmail = "Required / Requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail))
      errs.parentEmail = "Invalid email / Correo inválido";
    if (!formData.childName.trim()) errs.childName = "Required / Requerido";
    if (files.length === 0) errs.files = "Please attach your signed form / Adjunte su formulario firmado";
    return errs;
  };

  // ─── File handling ─────────────────────────────────────────────────────
  const handleFiles = (newFiles) => {
    const arr = Array.from(newFiles).filter((f) => {
      const ext = f.name.toLowerCase();
      return (ext.endsWith(".pdf") || ext.endsWith(".jpg") || ext.endsWith(".jpeg") ||
        ext.endsWith(".png") || ext.endsWith(".heic")) && f.size <= 10 * 1024 * 1024;
    });
    setFiles((prev) => [...prev, ...arr].slice(0, 5));
  };
  const removeFile = (i) => setFiles((prev) => prev.filter((_, idx) => idx !== i));
  const handleDrag = (e) => {
    e.preventDefault(); e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };
  const handleDrop = (e) => {
    e.preventDefault(); e.stopPropagation(); setDragActive(false);
    if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
  };
  const formatSize = (b) => b < 1024 ? b + " B" : b < 1048576 ? (b / 1024).toFixed(1) + " KB" : (b / 1048576).toFixed(1) + " MB";

  // ─── Toggle upload for a form ──────────────────────────────────────────
  const toggleUpload = (formId) => {
    if (expandedForm === formId) {
      setExpandedForm(null);
    } else {
      setExpandedForm(formId);
      setUploadState("idle");
      setFormData({ parentName: "", parentEmail: "", childName: "", phone: "", notes: "" });
      setFiles([]);
      setErrors({});
      setTimeout(() => {
        uploadRefs.current[formId]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  // ─── Submit ────────────────────────────────────────────────────────────
  const handleSubmit = async (formTitle) => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setUploadState("uploading");
    try {
      const sub = new FormData();
      sub.append("access_key", ACCESS_KEY);
      sub.append("subject", `LSPA Form Upload: ${formTitle} - ${formData.childName}`);
      sub.append("from_name", formData.parentName);
      sub.append("replyto", formData.parentEmail);
      sub.append("Parent Name", formData.parentName);
      sub.append("Parent Email", formData.parentEmail);
      sub.append("Child Name", formData.childName);
      sub.append("Form Type", formTitle);
      sub.append("Phone", formData.phone || "Not provided");
      sub.append("Notes", formData.notes || "None");
      files.forEach((file, i) => sub.append(`attachment_${i + 1}`, file));

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: sub });
      const result = await res.json();
      if (result.success) {
        setUploadState("success");
        setTimeout(() => {
          setFormData({ parentName: "", parentEmail: "", childName: "", phone: "", notes: "" });
          setFiles([]);
        }, 1000);
      } else throw new Error(result.message);
    } catch (err) {
      console.error("Upload error:", err);
      setUploadState("error");
    }
  };

  // ─── Render ────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif", color: c.gray800, minHeight: "100vh", background: c.cream }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div
        style={{
          background: `linear-gradient(160deg, ${c.navy} 0%, #2D4A7A 40%, #1E3A5F 100%)`,
          padding: "140px 24px 56px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 60, left: "10%", width: 80, height: 80, borderRadius: "50%", background: c.gold, opacity: 0.06 }} />
        <div style={{ position: "absolute", bottom: 20, right: "15%", width: 120, height: 120, borderRadius: "50%", background: c.gold, opacity: 0.04 }} />

        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: c.white,
            margin: "0 0 10px", letterSpacing: "-0.5px", lineHeight: 1.2,
          }}>
            Forms & Resources
          </h1>
          <p style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: "rgba(255,255,255,0.75)", margin: "0 0 6px", fontWeight: 400 }}>
            Formularios y Recursos
          </p>
          <p style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "rgba(255,255,255,0.55)", margin: "14px auto 0", maxWidth: 520, lineHeight: 1.6 }}>
            Download, print, sign, and securely upload your enrollment forms.
            <br />
            Descargue, imprima, firme y cargue de forma segura sus formularios.
          </p>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "36px 20px 80px" }}>

        {/* Instructions */}
        <div style={{
          background: c.blueLight, border: "1px solid #BFDBFE", borderRadius: 10,
          padding: "14px 18px", marginBottom: 28, display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>ℹ️</span>
          <div style={{ fontSize: 13, color: c.navy, lineHeight: 1.6 }}>
            <strong>How it works:</strong> Download the form → Print & sign → Click <strong>"Upload Signed Form"</strong> on that same card to submit it securely. You'll get an email confirmation.
            <br />
            <span style={{ color: c.gray500 }}>
              Descargue el formulario → Imprima y firme → Haga clic en "Cargar Formulario" para enviarlo. Recibirá confirmación por email.
            </span>
          </div>
        </div>

        {/* ── Form Cards ─────────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {forms.map((form) => (
            <div
              key={form.id}
              style={{
                background: c.white, borderRadius: 14, overflow: "hidden",
                border: expandedForm === form.id ? `2px solid ${c.gold}` : `1px solid ${c.gray200}`,
                boxShadow: expandedForm === form.id ? "0 8px 30px rgba(27,42,74,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Card header */}
              <div style={{ padding: "24px 24px 20px" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 10, background: c.goldLight,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0,
                  }}>
                    {form.icon}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h3 style={{ margin: "0 0 2px", fontSize: 18, fontWeight: 700, color: c.navy }}>{form.title}</h3>
                    <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 500, color: c.gold }}>{form.titleEs}</p>
                    <p style={{ margin: "0 0 10px", fontSize: 13, color: c.gray500, lineHeight: 1.5 }}>{form.desc}</p>
                    <span style={{
                      display: "inline-block", fontSize: 11, color: c.gray400, background: c.gray50,
                      padding: "3px 10px", borderRadius: 20, fontWeight: 600, letterSpacing: "0.3px", textTransform: "uppercase",
                    }}>
                      PDF · {form.pages}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap", alignItems: "center" }}>
                  {/* Download buttons */}
                  {form.files.map((file, i) => (
                    <a
                      key={i}
                      href={file.href}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "10px 18px", borderRadius: 8,
                        background: c.navy, color: c.white,
                        fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: "inherit",
                        cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.02)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
                    >
                      ⬇ Download {file.label}
                    </a>
                  ))}

                  {/* Divider */}
                  <div style={{ width: 1, height: 28, background: c.gray200, margin: "0 4px" }} />

                  {/* Upload toggle button */}
                  <button
                    onClick={() => toggleUpload(form.id)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "10px 18px", borderRadius: 8,
                      background: expandedForm === form.id ? c.gold : c.white,
                      color: expandedForm === form.id ? c.navy : c.navy,
                      border: `2px solid ${expandedForm === form.id ? c.gold : c.gold}`,
                      fontSize: 13, fontWeight: 600, fontFamily: "inherit",
                      cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    📤 {expandedForm === form.id ? "Close" : "Upload Signed Form"}
                  </button>
                </div>
              </div>

              {/* ── Expanded Upload Section ────────────────────────────── */}
              {expandedForm === form.id && (
                <div
                  ref={(el) => (uploadRefs.current[form.id] = el)}
                  style={{
                    borderTop: `1px solid ${c.gray200}`,
                    padding: "24px",
                    background: c.gray50,
                  }}
                >
                  {/* Security badge */}
                  <div style={{
                    background: c.greenLight, border: "1px solid #BBF7D0", borderRadius: 8,
                    padding: "10px 14px", marginBottom: 20, display: "flex", gap: 8, alignItems: "center",
                  }}>
                    <span style={{ fontSize: 15 }}>🔒</span>
                    <span style={{ fontSize: 12, color: c.gray700, lineHeight: 1.5 }}>
                      <strong>Secure submission</strong> — your files go directly to Laura Spelman Preschool Academy. You'll receive an email confirmation.
                    </span>
                  </div>

                  {/* ── Success State ──────────────────────────────── */}
                  {uploadState === "success" && (
                    <div style={{
                      background: c.white, border: `2px solid ${c.green}`, borderRadius: 12,
                      padding: "36px 24px", textAlign: "center",
                    }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: "50%", background: c.greenLight,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 16px", fontSize: 28,
                      }}>✓</div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: c.green, margin: "0 0 6px" }}>
                        Submitted Successfully! / ¡Enviado Exitosamente!
                      </h3>
                      <p style={{ fontSize: 13, color: c.gray500, margin: "0 0 16px", lineHeight: 1.5 }}>
                        Confirmation sent to your email. LSPA has been notified.
                      </p>
                      <button
                        onClick={() => { setUploadState("idle"); setFiles([]); setErrors({}); setFormData({ parentName: "", parentEmail: "", childName: "", phone: "", notes: "" }); }}
                        style={{
                          padding: "10px 24px", borderRadius: 8, background: c.navy,
                          color: c.white, border: "none", fontSize: 13, fontWeight: 600,
                          cursor: "pointer", fontFamily: "inherit",
                        }}
                      >
                        Upload Another / Cargar Otro
                      </button>
                    </div>
                  )}

                  {/* ── Error State ────────────────────────────────── */}
                  {uploadState === "error" && (
                    <div style={{
                      background: c.redLight, border: `2px solid ${c.red}`, borderRadius: 12,
                      padding: "24px", textAlign: "center", marginBottom: 16,
                    }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: c.red, margin: "0 0 6px" }}>
                        Error — Please try again / Intente de nuevo
                      </p>
                      <button
                        onClick={() => setUploadState("idle")}
                        style={{
                          padding: "8px 20px", borderRadius: 8, background: c.navy,
                          color: c.white, border: "none", fontSize: 13, fontWeight: 600,
                          cursor: "pointer", fontFamily: "inherit", marginTop: 8,
                        }}
                      >
                        Retry / Reintentar
                      </button>
                    </div>
                  )}

                  {/* ── Upload Form ────────────────────────────────── */}
                  {(uploadState === "idle" || uploadState === "uploading") && (
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: c.navy, margin: "0 0 4px" }}>
                        Uploading: {form.title}
                      </h4>
                      <p style={{ fontSize: 12, color: c.gold, fontWeight: 500, margin: "0 0 18px" }}>
                        Cargando: {form.titleEs}
                      </p>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                        {/* Parent Name */}
                        <div>
                          <label style={labelStyle}>
                            Parent / Guardian Name <span style={reqStyle}>*</span>
                            <span style={labelEsStyle}>Nombre del Padre / Tutor</span>
                          </label>
                          <input
                            type="text" value={formData.parentName}
                            onChange={(e) => setFormData((p) => ({ ...p, parentName: e.target.value }))}
                            placeholder="Full name / Nombre completo"
                            style={{ ...inputStyle, borderColor: errors.parentName ? c.red : c.gray200 }}
                          />
                          {errors.parentName && <span style={errStyle}>{errors.parentName}</span>}
                        </div>

                        {/* Email */}
                        <div>
                          <label style={labelStyle}>
                            Your Email <span style={reqStyle}>*</span>
                            <span style={labelEsStyle}>Su Correo Electrónico</span>
                          </label>
                          <input
                            type="email" value={formData.parentEmail}
                            onChange={(e) => setFormData((p) => ({ ...p, parentEmail: e.target.value }))}
                            placeholder="email@example.com"
                            style={{ ...inputStyle, borderColor: errors.parentEmail ? c.red : c.gray200 }}
                          />
                          {errors.parentEmail && <span style={errStyle}>{errors.parentEmail}</span>}
                        </div>

                        {/* Child Name */}
                        <div>
                          <label style={labelStyle}>
                            Child's Name <span style={reqStyle}>*</span>
                            <span style={labelEsStyle}>Nombre del Niño/a</span>
                          </label>
                          <input
                            type="text" value={formData.childName}
                            onChange={(e) => setFormData((p) => ({ ...p, childName: e.target.value }))}
                            placeholder="Child's full name"
                            style={{ ...inputStyle, borderColor: errors.childName ? c.red : c.gray200 }}
                          />
                          {errors.childName && <span style={errStyle}>{errors.childName}</span>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label style={labelStyle}>
                            Phone <span style={labelEsStyle}>Teléfono</span>
                          </label>
                          <input
                            type="tel" value={formData.phone}
                            onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                            placeholder="(609) 000-0000"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* File upload area */}
                      <div style={{ marginTop: 16 }}>
                        <label style={labelStyle}>
                          Attach Signed Form(s) <span style={reqStyle}>*</span>
                          <span style={labelEsStyle}>Adjuntar Formulario(s) Firmado(s)</span>
                        </label>
                        <div
                          onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          style={{
                            border: `2px dashed ${dragActive ? c.blue : errors.files ? c.red : c.gray300}`,
                            borderRadius: 10, padding: "24px 16px", textAlign: "center", cursor: "pointer",
                            background: dragActive ? c.blueLight : c.white, transition: "all 0.2s ease",
                          }}
                        >
                          <input
                            ref={fileInputRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.heic"
                            onChange={(e) => handleFiles(e.target.files)} style={{ display: "none" }}
                          />
                          <div style={{ fontSize: 28, marginBottom: 6 }}>📎</div>
                          <p style={{ fontSize: 13, fontWeight: 600, color: c.gray700, margin: "0 0 4px" }}>
                            {dragActive ? "Drop files here" : "Click or drag files here"}
                          </p>
                          <p style={{ fontSize: 11, color: c.gray400, margin: 0 }}>
                            PDF, JPG, PNG, HEIC · Max 10MB · Up to 5 files
                          </p>
                        </div>
                        {errors.files && <span style={errStyle}>{errors.files}</span>}

                        {/* File list */}
                        {files.length > 0 && (
                          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                            {files.map((file, i) => (
                              <div key={i} style={{
                                display: "flex", alignItems: "center", gap: 8, padding: "6px 10px",
                                background: c.white, borderRadius: 6, border: `1px solid ${c.gray200}`,
                              }}>
                                <span style={{ fontSize: 14 }}>📄</span>
                                <span style={{ flex: 1, fontSize: 12, fontWeight: 500, color: c.gray700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                  {file.name}
                                </span>
                                <span style={{ fontSize: 10, color: c.gray400, flexShrink: 0 }}>{formatSize(file.size)}</span>
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                                  style={{
                                    width: 20, height: 20, borderRadius: 4, border: "none", background: c.redLight,
                                    color: c.red, cursor: "pointer", fontSize: 10, fontWeight: 700,
                                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                  }}
                                >✕</button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Notes */}
                      <div style={{ marginTop: 14 }}>
                        <label style={labelStyle}>
                          Notes <span style={labelEsStyle}>Notas Adicionales</span>
                        </label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                          placeholder="Any questions or comments / Preguntas o comentarios"
                          rows={2}
                          style={{ ...inputStyle, resize: "vertical", minHeight: 60 }}
                        />
                      </div>

                      {/* Submit */}
                      <div style={{ marginTop: 20, textAlign: "center" }}>
                        <button
                          onClick={() => handleSubmit(form.uploadLabel)}
                          disabled={uploadState === "uploading"}
                          style={{
                            padding: "12px 40px", borderRadius: 8,
                            background: uploadState === "uploading" ? c.gray300 : `linear-gradient(135deg, ${c.navy} 0%, #2D4A7A 100%)`,
                            color: c.white, border: "none", fontSize: 14, fontWeight: 700,
                            cursor: uploadState === "uploading" ? "wait" : "pointer", fontFamily: "inherit",
                            transition: "transform 0.2s ease", boxShadow: "0 3px 10px rgba(27,42,74,0.2)",
                          }}
                          onMouseEnter={(e) => { if (uploadState !== "uploading") e.currentTarget.style.transform = "scale(1.03)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                        >
                          {uploadState === "uploading" ? "⏳ Submitting... / Enviando..." : "📤 Submit Form / Enviar Formulario"}
                        </button>
                        <p style={{ fontSize: 10, color: c.gray400, marginTop: 8 }}>
                          🔒 Encrypted · Sent directly to LSPA · Confirmation to your email
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Contact fallback ────────────────────────────────────────── */}
        <div style={{
          marginTop: 32, padding: "18px 20px", borderRadius: 10,
          background: c.white, border: `1px solid ${c.gray200}`, textAlign: "center",
        }}>
          <p style={{ fontSize: 13, color: c.gray500, margin: 0, lineHeight: 1.6 }}>
            Having trouble? Email forms directly to{" "}
            <a href="mailto:lauraspelmanacademy@verizon.net" style={{ color: c.blue, fontWeight: 600 }}>
              lauraspelmanacademy@verizon.net
            </a>{" "}
            or drop them off at either campus.
            <br />
            <span style={{ color: c.gray400 }}>
              ¿Problemas? Envíe por correo electrónico o entréguelos en persona.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
