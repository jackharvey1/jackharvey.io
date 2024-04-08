import './LogoButton.css';

export default ({ alt, src = '', href = '' }) => (
    <a href={href}>
        <div class="button">
            <img alt={alt} src={src} />
        </div>
    </a>
)