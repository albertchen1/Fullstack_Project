import React from 'react';
import { withRouter } from 'react-router-dom';

class EditExperienceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.experience.title,
            company: this.props.experience.company,
            location: this.props.experience.location,
            start_date_month: this.props.experience.start_date_month,
            start_date_year: this.props.experience.start_date_year,
            end_date_year: this.props.experience.end_date_year,
            end_date_month: this.props.experience.end_date_month,
            description: this.props.experience.description
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // handleInputTitle(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputCompany(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputLocation(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputStartDate(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputEndDate(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputDescription(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    handleSubmit(e) {
        e.preventDefault();

        let experience = {
            id: this.props.experience.id,
            title: this.state.title,
            company: this.state.company,
            location: this.state.location,
            start_date_month: this.state.start_date_month,
            start_date_year: this.state.start_date_year,
            end_date_month: this.state.end_date_month,
            end_date_year: this.state.end_date_year,
            description: this.state.description
        }
        // const user = Object.assign({}, this.state);
        this.props.updateExperience(experience).then(this.props.close);
    }

    renderErrors() {
        return (
            // <ul>
            //     {this.props.errors.map((error, i) => (
            //         <li key={`error-${i}`}>
            //             {error}
            //         </li>
            //     ))}
            // </ul>
            null
        );
    }

    render() {
        return (
            <div className="modal">
                <div className="edit-experience-modal modal-dialog">
                    <div className="edit-experience-container">
                        <div className="edit-experience-top">
                            <h2 id="edit-experience-edit-intro">Edit experience</h2>
                            <h2 id="edit-experience-exit" onClick={this.props.close}>X</h2>
                        </div>
                        <div className="edit-experience-title">
                            <h3 id="edit-experience-title-label">Title *</h3>
                            <form id="edit-experience-title-form">
                                <input id="edit-experience-title-box" value={this.state.title}
                                    onChange={this.update('title')}>
                                </input>
                            </form>
                        </div>
                        <div className="edit-experience-company">
                            <h3 id="edit-experience-company-label">Company *</h3>
                            <form id="edit-experience-company-form">
                                <input id="edit-experience-company-box" value={this.state.company}
                                    onChange={this.update('company')}>
                                </input>
                            </form>
                        </div>
                        <div className="edit-experience-location">
                            <h3 id="edit-experience-location-label">Location </h3>
                            <form id="edit-experience-location-form">
                                <input id="edit-experience-location-box" value={this.state.location}
                                    onChange={this.update('location')}>
                                </input>
                            </form>
                        </div>


                        <div className="edit-experience-dates-field">
                            <div className="edit-experience-start">
                                <h3 id="edit-experience-startdate-label">Start Date *</h3>
                                <div id="edit-experience-startdate-dates">
                                    <div id="edit-experience-startdate-month">
                                        <select id="edit-experience-startdate-month-list" value={this.state.start_date_month}
                                            onChange={this.update('start_date_month')}>
                                            <option value="Jan">Jan</option>
                                            <option value="Feb">Feb</option>
                                            <option value="Mar">Mar</option>
                                            <option value="Apr">Apr</option>
                                            <option value="May">May</option>
                                            <option value="Jun">Jun</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Aug">Aug</option>
                                            <option value="Sep">Sep</option>
                                            <option value="Oct">Oct</option>
                                            <option value="Nov">Nov</option>
                                            <option value="Dec">Dec</option>
                                        </select>
                                    </div>
                                    <div id="edit-experience-startdate-year">
                                        <select id="edit-experience-startdate-year-list" value={this.state.start_date_year}
                                            onChange={this.update('start_date_year')}>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018" >2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                            <option value="1949">1949</option>
                                            <option value="1948">1948</option>
                                            <option value="1947">1947</option>
                                            <option value="1946">1946</option>
                                            <option value="1945">1945</option>
                                            <option value="1944">1944</option>
                                            <option value="1943">1943</option>
                                            <option value="1942">1942</option>
                                            <option value="1941">1941</option>
                                            <option value="1940">1940</option>
                                            <option value="1939">1939</option>
                                            <option value="1938">1938</option>
                                            <option value="1937">1937</option>
                                            <option value="1936">1936</option>
                                            <option value="1935">1935</option>
                                            <option value="1934">1934</option>
                                            <option value="1933">1933</option>
                                            <option value="1932">1932</option>
                                            <option value="1931">1931</option>
                                            <option value="1930">1930</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-experience-end">
                                <h3 id="edit-experience-enddate-label">End Date *</h3>
                                <div id="edit-experience-enddate-dates">
                                    <div id="edit-experience-enddate-month">
                                        <select id="edit-experience-enddate-month-list" value={this.state.end_date_month}
                                            onChange={this.update('end_date_month')}>
                                            <option value="Jan">Jan</option>
                                            <option value="Feb">Feb</option>
                                            <option value="Mar">Mar</option>
                                            <option value="Apr">Apr</option>
                                            <option value="May">May</option>
                                            <option value="Jun">Jun</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Aug">Aug</option>
                                            <option value="Sep">Sep</option>
                                            <option value="Oct" >Oct</option>
                                            <option value="Nov">Nov</option>
                                            <option value="Dec">Dec</option>
                                        </select>
                                    </div>
                                    <div id="edit-experience-enddate-year">
                                        <select id="edit-experience-enddate-year-list" value={this.state.end_date_year}
                                            onChange={this.update('end_date_year')}>
                                            <option value="2020">2020</option>
                                            <option value="2019" >2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                            <option value="1949">1949</option>
                                            <option value="1948">1948</option>
                                            <option value="1947">1947</option>
                                            <option value="1946">1946</option>
                                            <option value="1945">1945</option>
                                            <option value="1944">1944</option>
                                            <option value="1943">1943</option>
                                            <option value="1942">1942</option>
                                            <option value="1941">1941</option>
                                            <option value="1940">1940</option>
                                            <option value="1939">1939</option>
                                            <option value="1938">1938</option>
                                            <option value="1937">1937</option>
                                            <option value="1936">1936</option>
                                            <option value="1935">1935</option>
                                            <option value="1934">1934</option>
                                            <option value="1933">1933</option>
                                            <option value="1932">1932</option>
                                            <option value="1931">1931</option>
                                            <option value="1930">1930</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="edit-experience-description">
                            <h3 id="edit-experience-description-label">Description </h3>
                            <form id="edit-experience-description-form">
                                <textarea id="edit-experience-description-box" value={this.state.description}
                                    onChange={this.update('description')}>
                                </textarea>
                            </form>
                        </div>

                        <div className="edit-experience-submit-container">
                            <input className='edit-experience-submit' type='submit' value='Save' onClick={this.handleSubmit} />
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditExperienceModal);
