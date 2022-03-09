import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as SiteLogo} from '../assets/svg/siteLogo.svg'

function SiteHeaderLogo() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
      <div className="siteLogoContainer">
        <div className="siteLogo" onClick={() => navigate('/')}>
          <SiteLogo fill='#231F20'
          width='172.6px' 
          height='50px'/>
        </div>
      </div>
  )
}
export default SiteHeaderLogo