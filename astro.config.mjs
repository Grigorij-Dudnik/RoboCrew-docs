// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
// import ion from '@starlight-plugins/ion';

export default defineConfig({
  site: 'https://Grigorij-Dudnik.github.io/RoboCrew',
  base: 'RoboCrew',
  integrations: [
    starlight({
      title: 'RoboCrew',
      head: [],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Grigorij-Dudnik/RoboCrew' },
				{ icon: 'discord', label: 'Discord', href: 'https://astro.build/chat' }

      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Quick Start Guide', link: 'guides/start' },
            { label: 'Full Setup', link: 'guides/setup/installing-robocrew' },
            { 
              label: 'Examples',
              items: [
                { label: 'Movement', link: 'guides/examples/movement' },
                { label: 'Audio and Voice', link: 'guides/examples/audio' },
                { label: 'VLA Manipulation Tools', link: 'guides/examples/vla-as-tools' },
                { label: 'Multiple Agents', link: 'guides/examples/multiagent' },
              ],
            },
            { 
              label: 'Additional Features',
              items: [
                { label: 'Arm Pose Recording and Recall', link: 'guides/features/position-tool' },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      plugins: [starlightThemeNova()],
    }),
  ],
});
