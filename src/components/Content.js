import './Content.css';
import LogoButton from './LogoButton';

const Content = () => (
    <div class="content-pane">
        <img src="/me.jpg" alt="me" class="portrait" />
        <p class="name">Jack Harvey</p>
        <div class="button-row">
            <LogoButton alt="linkedin" href="https://www.linkedin.com/in/jack-harvey-a54563111/" src="/linkedin.svg" />
            <LogoButton alt="github" href="https://github.com/jackharvey1" src="/github.svg" />
        </div>
        <p>Principal Engineer</p>
        <p>Node.js & React / Scala / C#</p>
    </div>
);

export default Content;