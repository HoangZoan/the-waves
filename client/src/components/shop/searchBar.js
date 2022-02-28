import { useFormik } from "formik";
import * as Yup from "yup";
import { errorHelper } from "../../utils/tools";
import { TextField } from "@mui/material";

const SearchBar = (props) => {
  const formik = useFormik({
    initialValues: { keywords: "" },
    validationSchema: Yup.object({
      keywords: Yup.string()
        .min(3, "You need to search for more than 3 characters")
        .max(200, "You need to search for less than 200 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      props.handleKeywords(values.keywords);
      resetForm();
    },
  });

  return (
    <div className="container">
      <form className="mt-3" onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            sx={{
              width: "100%",
              "& legend": {
                display: "none",
              },
            }}
            placeholder="Search for something"
            name="keywords"
            variant="outlined"
            {...formik.getFieldProps("keywords")}
            {...errorHelper(formik, "keywords")}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
