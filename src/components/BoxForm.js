import React from 'react';

const BoxForm = props => {
    const {color, setColor, formSubmit} = props;

    const getColor = e => {
        e.preventDefault();
        setColor(e.target.value);
        formSubmit();
    }

    return (
        <form onSubmit={ getColor } className="form-inline">
            <div className="form-group">
                <label htmlFor="color" style={{marginRight:'10px'}}>Color</label>
                <input type="text" 
                    className="form-control" 
                    name="color" 
                    style={{marginRight:'10px'}}
                    onChange={ e => setColor(e.target.value) }
                    value={ color }
                />
            </div>

            <input type="submit" className="btn btn-info" value="Add"/>
        </form>
    )
}

export default BoxForm;