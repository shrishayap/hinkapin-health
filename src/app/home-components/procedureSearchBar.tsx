import Autocomplete from '@mui/joy/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

export const ProcedureSearchBar = () => {

    return (
        < Autocomplete
            startDecorator={< SearchIcon />}
            placeholder="Search for procedures"
            options={[]}
            size="lg"
        />
    )
}

export default ProcedureSearchBar;