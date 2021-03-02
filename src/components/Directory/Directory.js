import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
// Import Components
import MenuItem from "../MenuItem/MenuItem";
import {selectDirectorySections} from "../../redux/directory/directory.selector";
// Import scss
import "./Directory.scss"

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);