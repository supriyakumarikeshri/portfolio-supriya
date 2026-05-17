import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  Send,
  ArrowDown,
  Users,
  GitBranch,
  Check,
  AlertCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  }); 

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const contactCards = [
    {
      title: "LINKEDIN",
      value: "supriya-kumari",
      href: "https://www.linkedin.com/in/supriya-kumari-139039128",
      icon: <Users className="h-5 w-5" />,
      bg: "bg-[#e9f2ff]",
      color: "text-orange-600",
    },
    {
      title: "GITHUB",
      value: "supriyakumarikeshri",
      href: "https://github.com/supriyakumarikeshri",
      icon: <GitBranch className="h-5 w-5" />,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    {
      title: "WHATSAPP",
      value: "+91 8789852317",
      href: "https://wa.me/918789852317",
      icon: <MessageCircle className="h-5 w-5" />,
      bg: "bg-[#edf7e7]",
      color: "text-[#4d9b2d]",
    },
    {
      title: "GMAIL",
      value: "supriyakumari2393",
      href: "mailto:supriyakumari2393@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      bg: "bg-[#fdeeee]",
      color: "text-[#d14b4b]",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    const toEmail = "supriyakumari2393@gmail.com";
    const body = `Hi Supriya,%0A%0A${encodeURIComponent(formData.message)}%0A%0A---%0AFrom: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}`;
    window.open(`mailto:${toEmail}?subject=${encodeURIComponent(formData.subject)}&body=${body}`);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 px-6 py-20 lg:px-16 relative overflow-hidden">

      <div className="absolute top-10 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "3s" }} />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="animate-slide-in-left">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                Contact
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Let's build
              <br />
              <span className="italic text-pink-600">something great</span>
            </h2>

            <p className="mt-6 max-w-md text-[17px] leading-8 text-[#575757]">
              Open to full-time roles, freelance projects, and collaborations.
              Reach out — I’d love to connect!
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactCards.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-[#dfdbd2] bg-[#faf9f5] p-4"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8c877f]">
                      {item.title}
                    </p>

                    <a
                      href={item.href}
                      target={item.title === "GMAIL" ? "_self" : "_blank"}
                      rel={item.title !== "GMAIL" ? "noopener noreferrer" : undefined}
                      className="mt-1 text-[15px] font-semibold leading-5 text-[#252525] hover:text-pink-600 transition-colors cursor-pointer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
            <form className="space-y-5 glass rounded-3xl p-8 border border-pink-100 shadow-xl shadow-pink-50" onSubmit={handleSubmit}>
              {/* Success Message */}
              {success && (
                <div className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4">
                  <Check className="h-5 w-5 text-green-600" />
                  <p className="text-sm font-semibold text-green-700">
                    Your email client has opened — click Send to deliver your message!
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <p className="text-sm font-semibold text-red-700">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-[#817c74]">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-14 w-full rounded-xl border border-[#ddd8cf] bg-[#faf9f5] px-4 text-[16px] outline-none placeholder:text-[#8a8a8a] focus:border-indigo-800"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-[#817c74]">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-14 w-full rounded-xl border border-[#ddd8cf] bg-[#faf9f5] px-4 text-[16px] outline-none placeholder:text-[#8a8a8a] focus:border-indigo-800"
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-[#817c74]">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity / Project idea"
                  className="h-14 w-full rounded-xl border border-[#ddd8cf] bg-[#faf9f5] px-4 text-[16px] outline-none placeholder:text-[#8a8a8a] focus:border-indigo-800"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-[#817c74]">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Supriya, I'd love to work with you on..."
                  className="w-full rounded-xl border border-[#ddd8cf] bg-[#faf9f5] px-4 py-4 text-[16px] outline-none placeholder:text-[#8a8a8a] focus:border-indigo-800"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`flex h-14 w-full items-center justify-center gap-3 rounded-2xl text-[16px] font-bold transition-all duration-300 ${
                  loading
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:scale-[1.02]"
                }`}
              >
                {loading ? "Sending..." : "Send message"}
                {!loading && <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;