import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../Schemas/contactFormSchema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  type FormData = {
    username: string;
    email: string;
    note: string;
  };

  async function onSubmit(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);

    reset();
  }

  const form = document.querySelector("form");
  form?.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault;
    }
    form.classList.add("was-validated");
  });

  return (
    <>
      <h2 className="my-3">Lépj velünk kapcsolatba!</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="d-flex gap-2 flex-column mb-4 col-md-5 mx-md-auto"
      >
        <p className="m-0 p-0">
          A *-al jelölt mezők kitöltése{" "}
          <span className="text-warning fw-bold">kötelező</span> !
        </p>
        <div className="form-floating">
          <input
            {...register("username")}
            className="form-control"
            type="text"
            placeholder="Név"
            required
            id="username"
            name="username"
            autoComplete="true"
          />
          <label htmlFor="username">Név*</label>
          {errors.username && (
            <p className="text-warning m-0 p-0">{errors.username.message}</p>
          )}
        </div>
        <div className="form-floating">
          <input
            {...register("email")}
            className="form-control"
            type="email"
            placeholder="Email"
            required
            id="email"
            name="email"
            autoComplete="true"
          />
          <label htmlFor="email">Email*</label>
          {errors.email && (
            <p className="text-warning m-0 p-0">{errors.email.message}</p>
          )}
        </div>
        <div className="form-floating">
          <textarea
            {...register("note")}
            className="form-control"
            style={{ height: "150px" }}
            placeholder="Üzenet"
            required
            id="note"
            name="note"
          ></textarea>
          <label htmlFor="note">Üzenet*</label>
          {errors.note && (
            <p className="text-warning m-0 p-0">{errors.note.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={isSubmitting}
        >
          Beküldés
        </button>
      </form>
    </>
  );
}
