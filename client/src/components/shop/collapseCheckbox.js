import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  Collapse,
} from "@mui/material";
import { useState } from "react";

const CollapseCheckbox = (props) => {
  const [open, setOpen] = useState(props.initState);
  const [checked, setChecked] = useState([]);

  const handleCollapseOpen = () => setOpen(!open);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderList = () =>
    props.list &&
    props.list.map((value) => (
      <ListItem key={value._id}>
        <ListItemText primary={value.name} />
        <ListItemSecondaryAction>
          <Checkbox
            checked={checked.indexOf(value._id) !== -1}
            onChange={() => handleToggle(value._id)}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ));

  return (
    <div className="collapse_items_wrapper">
      <List>
        <ListItem onClick={handleCollapseOpen}>
          <ListItemText primary={props.title} className="collapse_title" />
          {open ? <ArrowDropUp /> : <ArrowDropDown />}
        </ListItem>

        <Collapse in={open} timeout="auto">
          <List component="div" disablePadding>
            {renderList()}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default CollapseCheckbox;
