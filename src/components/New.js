import "../styles/New.css";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

function New() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <section className="form-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MovieApp - Add New Movie</title>
      </Helmet>
      <div>
        <h1>Add Movie here</h1>
        <form onSubmit={handleSubmit(() => alert("Movie added"))}>
          <div>
            <label htmlFor="title">Movie title</label>
            <input {...register("title", { required: true })} type="text" />
            {errors.title && <p>Movie title is required</p>}
          </div>
          <div>
            <label htmlFor="year">Movie year</label>
            <input {...register("movieyear", { required: true })} type="text" />
            {errors.movieyear && <p>Movie year is required</p>}
          </div>
          <div>
            <label htmlFor="image">Movie Image</label>
            <input {...register("image", { required: true })} type="file" />
            {errors.image && <p>Movie image is required</p>}
          </div>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </section>
  );
}

export default New;
