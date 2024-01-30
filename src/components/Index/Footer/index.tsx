import style from "./footer.module.scss";

export const Footer = () => {
  
  const columnContent = [
    {
      name: 'products',
      content : ['Drag And Drop', 'Visual Studio X', 'Easy Content']
    },
    {
      name: 'resources',
      content : ['Industries and tools', 'Use cases', 'Blog', 'Online events', 'Nostrud exercitation']
    },
    {
      name: 'company',
      content : ['Diversity & inclusion', 'About us', 'Press', 'Customer stories', 'Online communities']
    },
    {
      name: 'support',
      content : ['Documentation', 'Tutorials & guides', 'Webinars', 'Open-source']
    }
  ];

  const socialIconImg = ['./img/x.svg', './img/discord.svg', './img/facebook.svg', './img/instagram.svg', './img/linkedin.svg']

  const socialIcons = socialIconImg.map((img) => 
    <li>
      <a>
      <img src={img} alt="icon" className={style.svgSocial} />
      </a>
    </li>
  )

  const columns = columnContent.map((content) => 
    <div className={style.columnFooter}>
    <h6 className={style.h6Footer}>{content.name}</h6>
    <ul className={style.columnFooter}>
      <li className={style.liColumn}><a href="" className={style.footerLink}>{content.content[0]}</a></li>
      <li className={style.liColumn}><a href="" className={style.footerLink}>{content.content[1]}</a></li>
      <li className={style.liColumn}><a href="" className={style.footerLink}>{content.content[2]}</a></li>
      {content.content[3] && <li className={style.liColumn}><a href="" className={style.footerLink}>{content.content[3]}</a></li>}
      {content.content[4] && <li className={style.liColumn}><a href="" className={style.footerLink}>{content.content[4]}</a></li>}
    </ul>
  </div>
  )

  return (
    <footer className={style.footer}>
      <div className={style.footerWrap}>
        <div className={style.mainFooter}>
          <div className={style.logo}>
            <a href="index.html" aria-label="Cruip"></a>
          </div>
          <div className={style.footerColumnsWrap}>
            {columns}
          </div>
        </div>
        <div className={style.footerFooter}>
          <div className={style.cruipCom}>© Cruip.com. All rights reserved.</div>
          <div className={style.middleLinks}>
            <a className={style.footerLinkDown}>Terms</a>&nbsp;·&nbsp;
            <a className={style.footerLinkDown}>Privacy Policy</a>
          </div>
          <div className={style.socialLinksWrap}>
            <ul className={style.ulSocialLinks}>
              {socialIcons}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
