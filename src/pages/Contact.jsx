
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nom requis"),
  email: yup.string().email("Email invalide").required("Email requis"),
  message: yup.string().required("Message requis"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    alert("Message envoyé ! Merci.");
  };

  return (
    <div className="pt-20 px-6 min-h-screen bg-green-50 bg-[url('/assets/pixel-rabbit.png')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-green-900 mb-6">Nous contacter</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-green-800">Nom</label>
            <input {...register("name")} className="w-full border rounded p-2" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-green-800">Email</label>
            <input {...register("email")} className="w-full border rounded p-2" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-green-800">Message</label>
            <textarea {...register("message")} rows="4" className="w-full border rounded p-2" />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
