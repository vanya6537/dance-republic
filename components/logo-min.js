import withPure from './hoc/pure';

export default withPure(({size, ...props}) => (
    <svg
        // width={size || 82}
        height={size || 90}
        viewBox="0 0 500.01 498.9"
        version="1.1"
        xmlnsXlink="http://www.w3.org/2000/xlink"
        x="0px" y="0px"
        style={{
            // visually centering
            transform: 'translateX(-4.2%)',
            shapeRendering: 'auto',
            enableBackground: 'new 0 0 500.01 498.9'
        }}{...props}
    >
        <style jsx>
            {`
	        .st0{
	        fill:#D65D54;
	        stroke: #756D6B;
	        stroke-width:29;
	        stroke-miterlimit:10;
	        }
            .st1{
            fill:#FFFFFF;
            }
            `}
        </style>
        <g>
            <path className="st0" d="M231.08,478.96c79.51,0,140.61-20.06,183.32-60.16c42.69-40.08,64.04-96.95,64.04-170.6
		c0-73.63-21.35-130.5-64.04-170.6c-42.71-40.09-103.81-60.15-183.32-60.15H16.93v461.5H231.08z"/>
            <g>
                <path className="st1" d="M228.45,498.9l-54.08-77.01c-6.68,0.48-11.94,0.73-15.75,0.73H96.67v76.28H60.85V248.21h97.77
			c32.46,0,58.02,7.76,76.64,23.27c18.62,15.54,27.93,36.9,27.93,64.12c0,19.34-4.78,35.82-14.31,49.42
			c-9.57,13.62-23.17,23.52-40.84,29.73l59.45,84.15H228.45z M209.48,377.49c11.94-9.79,17.91-23.75,17.91-41.9
			c0-18.15-5.97-32.06-17.91-41.72c-11.94-9.68-29.25-14.5-51.94-14.5H96.67v112.81h60.87
			C180.22,392.17,197.54,387.28,209.48,377.49z"/>
            </g>
        </g>
    </svg>
));
