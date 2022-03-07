/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
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
     * Custom background color
    */
    backgroundColor?: string;
    /**
     * Capitalize all letters
    */
    allCaps?: boolean;
}
/**
 * UI label
*/
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
