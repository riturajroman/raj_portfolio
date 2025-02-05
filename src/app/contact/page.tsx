"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  budget: string;
  deadline: string;
}

const ContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
    budget: "",
    deadline: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      setMessage("Your inquiry has been sent. I'll get back to you soon!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectDetails: "",
        budget: "",
        deadline: "",
      });
      router.push("/");
    } catch (error: any) {
      setMessage(error.message || "Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full md:h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 border rounded-lg shadow-md"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-4">
            Let&apos;s Work Together
          </h2>
          <Link href={"/"}>
            <div className="relative z-0">
              <button className="size-14 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 text-black text-base">
                Home
              </button>
            </div>
          </Link>
        </div>

        {message && (
          <div
            className={`p-2 mb-4 text-white rounded ${
              message.includes("failed") ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {message}
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-4 text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-4 text-black"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-4 text-black"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Budget
            </label>
            <input
              type="text"
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-4 text-black"
            />
          </div>
        </div>
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4 text-black"
          />
        </div>
        <div>
          <label
            htmlFor="projectDetails"
            className="block text-sm font-medium mb-2"
          >
            Project Details
          </label>
          <textarea
            name="projectDetails"
            id="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4 text-black"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-gradient-to-r from-emerald-300 to-sky-400 text-black rounded-lg hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
