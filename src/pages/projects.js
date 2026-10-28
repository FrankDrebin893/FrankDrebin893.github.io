import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const SiteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
)

const WorkshopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.3 5H6.7a4 4 0 0 0-3.98 3.6l-.9 9A2.5 2.5 0 0 0 4.3 20.4c1.1 0 2.07-.72 2.39-1.78l.6-2.02h9.42l.6 2.02c.32 1.06 1.3 1.78 2.4 1.78a2.5 2.5 0 0 0 2.47-2.8l-.9-9A4 4 0 0 0 17.3 5Z" />
    <path d="M6.2 10.6h3.4M7.9 8.9v3.4" />
    <path d="M15 10.2h.01M17.4 12.6h.01" />
  </svg>
)

const icons = {
  github: GitHubIcon,
  site: SiteIcon,
  download: DownloadIcon,
  workshop: WorkshopIcon,
}

const groups = [
  {
    id: "audio",
    title: "Audio & music",
    projects: [
      {
        name: "HØJT DSP",
        tags: ["Rust", "VST3 · CLAP", "Win · macOS · Linux"],
        description:
          "Six free plugins for guitar, drums, bass and keys, each drawn as a stompbox. A guitar rig with four amps of my own design and ten pedals that can be dragged into another order, a drum kit whose every sound is made in the plugin instead of sampled, a pitch shifter quick enough to play through live, a plucked bass, an ambient pad and glass bells.",
        note: "Part of HØJT, Danish for loud and for high: these plugins, the piano viz and the chord atlases below share one home at hojte.net/hojt-audio.",
        links: [
          { kind: "site", label: "Plugins & sound examples", href: "https://hojte.net/hojt-audio/dsp/", primary: true },
          { kind: "download", label: "Latest release", href: "https://github.com/FrankDrebin893/hojt-audio/releases/latest" },
          { kind: "github", label: "Source", href: "https://github.com/FrankDrebin893/hojt-audio" },
        ],
      },
      {
        name: "Piano MIDI Visualization",
        tags: ["C#", "Windows", "MIDI"],
        description:
          "A desktop app for practising at a MIDI keyboard. It plays your keys through any SoundFont or SFZ piano at ASIO latency and names what you are holding — the chord, its inversion, its Roman numeral in the key — on a 61-key keyboard, a grand staff and the circle of fifths. It also runs falling-note practice for MIDI songs, records takes, and builds chord progressions you can play back.",
        links: [
          { kind: "site", label: "Page & download", href: "https://hojte.net/hojt-audio/piano/", primary: true },
          { kind: "github", label: "Source", href: "https://github.com/FrankDrebin893/hojt-audio/tree/main/piano" },
        ],
      },
      {
        name: "Guitar & Piano Chord Atlas",
        tags: ["Browser", "Mobile"],
        description:
          "34 chord types in all 12 keys, from power chords to altered dominants. On the guitar: movable and open shapes with fingers, intervals or note names on every dot. On the piano: root position or any inversion, two-hand voicings and a fingering for each, and a tap plays the chord. Free, in the browser, nothing to install.",
        links: [
          { kind: "site", label: "Open the atlases", href: "https://hojte.net/hojt-audio/resources/", primary: true },
          { kind: "github", label: "Source", href: "https://github.com/FrankDrebin893/hojt-audio/tree/main/site/resources" },
        ],
      },
    ],
  },
  {
    id: "mods",
    title: "Game mods",
    projects: [
      {
        name: "Slay the Spire 2 — Seed Search & Tweaks",
        tags: ["C#", "Harmony", "Rust"],
        description:
          "A mod that adds a Search Seed button to the Custom Run screen. Pick what you want from the game's own icons — Neow's offers, each act's boss and ancient, the order relics come in, what sits on the map, the first card reward — and a seed engine written in Rust searches millions of seeds a second for a run that matches. Any seed can be previewed before you start it, and bookmarked with a note.",
        links: [
          { kind: "workshop", label: "Steam Workshop", href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3816393620", primary: true },
          { kind: "github", label: "Source", href: "https://github.com/FrankDrebin893/SlayTheSpire2Mod" },
        ],
      },
      {
        name: "Hades II — Balance Changes",
        tags: ["Lua", "Hell2Modding"],
        description:
          "The parts of a run I wanted to tune. Steady Growth upgrades a boon one encounter sooner, the first reward of a run can be forced to a particular god or to a Chaos gate, rerolling Chaos stops offering the same blessings over again, and boon screens get free rerolls.",
        note: "Installs as a Hell2Modding plugin.",
        links: [
          { kind: "github", label: "Source & install guide", href: "https://github.com/FrankDrebin893/Hades2BalanceChangesMod", primary: true },
        ],
      },
    ],
  },
  {
    id: "web",
    title: "Web apps",
    projects: [
      {
        name: "Aprende Español",
        tags: ["Blazor WebAssembly", ".NET 9"],
        description:
          "A vocabulary app that works through Spanish in frequency order, from the first hundred words out to the first ten thousand. Flashcards and quizzes, pronunciation from the browser's own speech synthesis, and mastery tracking kept in the browser. No account, no server.",
        links: [
          { kind: "site", label: "Open the app", href: "https://hojte.net/learn-spanish/", primary: true },
          { kind: "github", label: "Source", href: "https://github.com/FrankDrebin893/learn-spanish" },
        ],
      },
    ],
  },
]

const ProjectLink = ({ link }) => {
  const Icon = icons[link.kind]
  return (
    <a
      className={`project-link${link.primary ? " project-link--primary" : ""}`}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
      <span>{link.label}</span>
    </a>
  )
}

const ProjectsPage = ({ location }) => {
  return (
    <Layout location={location} title="Projects">
      <div className="site-sheet">
        <div className="page-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-lede">
            What I build outside work: audio plugins, tools for practising piano and guitar, mods for the
            games I keep coming back to, and the odd web app. Source for all of it is on GitHub.
          </p>
        </div>

        {groups.map(group => (
          <section className="project-group" key={group.id} aria-labelledby={`group-${group.id}`}>
            <h2 className="project-group-title" id={`group-${group.id}`}>
              {group.title}
            </h2>
            <ul className="project-list">
              {group.projects.map(project => (
                <li className="project-card" key={project.name}>
                  <h3 className="project-card-title">{project.name}</h3>
                  <ul className="project-tags">
                    {project.tags.map(tag => (
                      <li className="project-tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="project-desc">{project.description}</p>
                  {project.note && <p className="project-note">{project.note}</p>}
                  <div className="project-links">
                    {project.links.map(link => (
                      <ProjectLink link={link} key={link.href} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => (
  <Seo
    title="Projects — HOJTE.NET"
    description="Projects by Rasmus Valbro Højte: the HØJT DSP VST3 and CLAP plugins, a piano MIDI visualization app, guitar and piano chord atlases, Slay the Spire 2 and Hades II mods, and a Spanish vocabulary app."
    url="https://hojte.net/projects/"
  />
)
