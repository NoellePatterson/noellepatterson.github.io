import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: 'var(--textLink)',
    },
    blockquote: {
      color: 'var(--blockQuote)',
      borderLeft: 'var(--blockQuoteBorder)',
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    'a.anchor': {
      boxShadow: 'none',
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
      stroke: 'var(--textLink)',
    },
    hr: {
      background: 'var(--hr)',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
