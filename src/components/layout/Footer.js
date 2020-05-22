import React from "react";
function Footer() {
    return (<div>
        <nav className="nav bg-dark fixed-bottom" id="footer">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">jan-2020</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
    </div>)
}
export default Footer;