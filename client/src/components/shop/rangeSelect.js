import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { errorHelper } from "../../utils/tools";
import { useState } from "react";

const RangeSelect = (props) => {
  const [open, setOpen] = useState(props.initState);

  const handleCollapseOpen = () => setOpen(!open);

  const formik = useFormik({
    initialValues: { min: 0, max: 50000 },
    validationSchema: Yup.object({
      min: Yup.number().min(0, "the minimum is 0"),
      max: Yup.number().max(100000, "The maximum is 100.000"),
    }),
    onSubmit: (values) => {
      props.handleRange([values.min, values.max]);
    },
  });

  return (
    <div className="collapse_items_wrapper">
      <List>
        <ListItem onClick={handleCollapseOpen}>
          <ListItemText primary={props.title} className="collapse_title" />
          {open ? <ArrowDropUp /> : <ArrowDropDown />}
        </ListItem>
        <Collapse in={open} timeout="auto">
          <List component="div" disablePadding>
            <form className="mt-3" onSubmit={formik.handleSubmit}>
              <div>
                <TextField
                  sx={{
                    "& legend": {
                      display: "none",
                    },
                  }}
                  placeholder="$ Min"
                  name="min"
                  variant="outlined"
                  type="number"
                  {...formik.getFieldProps("min")}
                  {...errorHelper(formik, "min")}
                />
              </div>
              <br />
              <div>
                <TextField
                  sx={{
                    "& legend": {
                      display: "none",
                    },
                  }}
                  placeholder="$ Max"
                  name="max"
                  variant="outlined"
                  type="number"
                  {...formik.getFieldProps("max")}
                  {...errorHelper(formik, "max")}
                />
              </div>
              <Button
                type="submit"
                className="mt-3"
                variant="outlined"
                color="secondary"
                size="small"
              >
                Search
              </Button>
            </form>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default RangeSelect;
