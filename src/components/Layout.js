import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { ToggleBtn } from './ThemeToggle'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h1
              style={{
                ...scale(1.5),
                fontSize: '1.4rem',
                margin: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </h1>
            <a
              href="https://twitter.com/leog0esger"
              style={{
                textDecoration: 'none',
                boxShadow: 'none',
                height: 30,
                marginLeft: '0.4rem',
              }}
            >
              <img
                src={require('./twitter.png')}
                style={{ width: 30, height: 30, margin: 0 }}
              />
            </a>
          </div>
          <ToggleBtn />
        </div>
      )
    } else {
      header = (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 36,
          }}
        >
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              fontSize: '1.8rem',
              margin: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <ToggleBtn />
        </div>
      )
    }
    return (
      <div
        style={{
          color: 'var(--textNormal)',
          transition: 'color 0.5s ease-out, background 0.5s ease-out',
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            justifyContent: 'flex-end',
            paddingBottom: 12,
            backgroundColor: 'var(--bg)',
          }}
        >
{/* Uncomment block below for tab button template!  */}
          {/* <a style={{ marginRight: 4, cursor: 'pointer' }}>Link 1</a> |
          <a style={{ margin: '0px 4px', cursor: 'pointer' }}>Link 2</a>|
          <a style={{ margin: '0px 4px', cursor: 'pointer' }}>Link 3</a>|
          <a style={{ margin: '0px 4px', cursor: 'pointer' }}>Link 4</a> */}
        </div>
        <div
          style={{
            position: 'sticky',
            top: 40,
            backgroundColor: 'var(--bg)',
            paddingBottom: 6,
            zIndex: 10,
            paddingBottom: 4,
          }}
        >
          {header}
        </div>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a target="_blank" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
      </div>
    )
  }
}
export default Layout
