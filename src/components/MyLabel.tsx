import './myLabel.css'

interface MyLabelProps {
    /**
     * Text to show
    */
    label: string;
    /**
     * Font size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Font color
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color
    */
    fontColor?: string;
    /**
     * Capitalize all letters
    */
    allCaps?: boolean;
}

/**
 * UI label
*/
export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor = ''

}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
        { allCaps? label.toUpperCase() : label}
    </span>
  )
}