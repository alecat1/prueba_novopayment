import { useState } from "react";
import { motion } from "framer-motion";
import Toolbar from '@mui/material/Toolbar';

const Navbar = (props) => {
  const { navbarPages } = props;
  const [showSubMenu, setShowSubMenu] = useState([]);

  //uso de animaciones al abrir y cerrar una <ul> de un menú
  const menu_animation_styles = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-20%" },
  };

  //cambio de estado para mostrar / ocultar el menú al pasar el mouse por encima
  const subMenuOnMouseEnterHandler = (subMenuTitle) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuTitle] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuTitle) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuTitle] = false;
      return arr;
    });
  };

// uso de la librería material-ui para la navbar/toolbar
  return (
    <nav>
      < Toolbar className='main-nav'>
        {navbarPages.map((element, i) => {
          if (!element.children) {
            return (
              <li key={element.name}>
                <a href='#' className='header-nav-link'>
                  <span>{element.name}</span>
                </a>
              </li>
            );
          }

          return (
            <li
              onMouseEnter={(event) => subMenuOnMouseEnterHandler(element.name)}
              onMouseLeave={(event) => subMenuOnMouseLeaveHandler(element.name)}
              key={element.name}
              className='header-nav-options options-hover'
            >
              <div className='header-nav-div'>
                <span>{element.name}</span>
              </div>
              {/* uso de la librería framer-motion para animaciones de las listas al momento de desplegar información de archivo .json */}
              <motion.ul
                variants={menu_animation_styles}
                animate={showSubMenu[element.name] ? "open" : "closed"}
                className='header-nav-ul'
              >
                {element.children.map((subelement) => {
                    if (!subelement.children) {
                      return (
                        <li key={subelement.name} className='sub-menu-li'>
                          <a
                            href='#'
                            className='sub-menu-link'
                            style={{ textDecoration: "none" }}
                          >
                            <span>{subelement.name}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li
                        onMouseEnter={() => subMenuOnMouseEnterHandler(subelement.name)}
                        onMouseLeave={() => subMenuOnMouseLeaveHandler(subelement.name)}
                        key={subelement.name}
                        className='sub-menu-options sub-menu-hover'
                      >
                        <div className='sub-menu-div'>
                          <span>{subelement.name}</span>
                          <span className='arrow'>{">"}</span>
                        </div>
                        <motion.ul
                          animate={showSubMenu[subelement.name] ? "open" : "closed"}
                          className='sub-menu-ul'
                        >
                          {subelement.children.map((elem) => {
                              return (
                                <li 
                                onMouseEnter={() => subMenuOnMouseEnterHandler(subelement.name)}
                                onMouseLeave={() => subMenuOnMouseLeaveHandler(subelement.name)}
                                key={elem.name} 
                                className='grand-child-link'>
                                  <a href='#'>
                                    <span>{elem.name}</span>
                                  </a>
                                </li>
                              );
                            })}
                        </motion.ul>
                      </li>
                    );
                  })}
              </motion.ul>
            </li>
          );
        })}
      </Toolbar>
    </nav>
  );
};

export default Navbar;