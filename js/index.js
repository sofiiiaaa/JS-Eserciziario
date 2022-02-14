let HOME_PAGE = "./../../index.html"
const LINKEDIN = "https://www.linkedin.com/in/sofia-riggi-14671a231/"
const PORTFOLIO = "https://sofiiiaaa.github.io/Web-Personal-Developer-Portfolio/"
const GITHUB = "https://github.com/sofiiiaaa"
const COLOR_HOME = 'black'
const EMAIL = "sofia.riggi@libero.it"

const navbar = (path) => {
    (!(path))? HOME_PAGE = "": null

    document.write(`
    <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="${HOME_PAGE}">SSofy eserciziario</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="${HOME_PAGE}">
                    <i class="fa fa-home fa-2x" style='color:${HOME_PAGE}' aria-hidden="true"></i> </a>
            </li>
        </ul>
    </div>
    </nav>
    ${path? `    <nav aria-label="breadcrumb">
    <ol class="breadcrumb" id="path">
        <li class="breadcrumb-item"><a href="${HOME_PAGE}">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">${path}</li>
        </ol>
    </nav>`: "<span></span>"}`
    )
}




const footer = () => {
    document.write(`
    <div class="footer">
    <div class="row"></div>
      <div class="col-12 text-center">
        <ul class="list-unstyled list-inline social">
          <li class="list-inline-item"><a href="${GITHUB}"><i class="fa fa-github-square fa-2x"></i></a></li>
          <li class="list-inline-item"><a href="mailto:${EMAIL}"><i class="fa fa-envelope-square fa-2x"></i></a></li>
          <li class="list-inline-item"><a href="${LINKEDIN}"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
          <li class="list-inline-item"><a href="${PORTFOLIO}"><i class="fa fa-briefcase fa-2x"></i></a></li>
          <li><a href="#"><span >@sofia riggi</span></a></li>
        </ul>
      </div>
    </div>
  </div>
    `)
};