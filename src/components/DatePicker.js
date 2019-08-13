import React, { Component } from "react";
import { withTheme, withStyles } from "@material-ui/core/styles";
import { injectIntl } from 'react-intl';
import { FormControl } from "@material-ui/core";
import { DatePicker as MUIDatePicker} from "@material-ui/pickers";
import { formatMessage } from "../helpers/i18n";

const styles = theme => ({
    label: {
        color: theme.palette.primary.main
    },

});

class DatePicker extends Component {

    state = { value: null }

    componentDidMount() {
        this.setState({ value: this.props.value })
    }

    dateChange = e => {
        this.setState(
            { value: e },
            i => this.props.onChange(!!e? e.toDate() : null)
        );
    }

    render() {
        const { intl, classes, module, label, onChange } = this.props;
        return (
            <FormControl fullWidth>
                <MUIDatePicker
                    format="YYYY-MM-DD"
                    clearable
                    value={this.state.value}
                    InputLabelProps={{
                        className: classes.label
                    }}
                    id={`${module}-${label}-date-picker`}
                    label={formatMessage(intl, module, label)}
                    onChange={this.dateChange}
                />
            </FormControl>
        )
    }
}

export default injectIntl(withTheme(withStyles(styles)(DatePicker)));
