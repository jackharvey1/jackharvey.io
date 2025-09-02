import './LogoButton.css';

const LogoButton = ({ alt, src = '', href = '' }) => (
    <a href={href}>
        <div class="button">
            <img alt={alt} src={src} />
        </div>
    </a>
);

export default LogoButton;