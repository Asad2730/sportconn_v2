import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => (
  <Paper
    component="form"
    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
  >
    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="" value={""} />
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
  </Paper>
);
