import './Content.css';
import LogoButton from './LogoButton';

export default () => (
    <div class="content-pane">
        <img src="/me.jpg" class="portrait" />
        <p class="name">Jack Harvey</p>
        <div class="button-row">
            <LogoButton alt="linkedin" href="https://www.linkedin.com/in/jack-harvey-a54563111/" src="/linkedin.svg" />
            <LogoButton alt="github" href="https://github.com/jackharvey1" src="/github.svg" />
        </div>
        <p>Senior Developer / Engineering Manager</p>
    </div>
)