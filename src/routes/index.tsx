import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

import { LogoGithub, LogoDiscord, Code } from 'qwik-ionicons';
import Logo from '~/components/elements/Logo';

export default component$(() => {
  return (
    <section class="mx-auto flex flex-col gap-10 justify-center items-center max-w-6xl" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="w-full px-[10%]">
        <div style="filter: drop-shadow(0 0 3rem #CB6CE6);">
          <Logo/>
        </div>
      </div>
      <p class="text-xl sm:text-3xl text-white">Hello there! 👋</p><p>I'm MattTheTekie. As a technology expert, I am committed to sharing my knowledge and expertise with others. Whether you are a tech novice or an experienced professional, I can help you stay up-to-date with the latest trends and developments in the field of technology.</p>
      <div class="mx-auto flex flex-col gap-3 justify-center items-center max-w-6xl" >
        <Link href="/services" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 px-6 py-3 font-bold text-gray-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-4 items-center">
          <Code width="24" class="fill-current" />
          Services
        </Link>
        <Link href="/projects" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 px-6 py-3 font-bold text-gray-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-4 items-center">
          <Code width="24" class="fill-current" />
          Projects
        </Link>
        <div class="flex gap-3">
          <a href="https://github.com/MattTheTekie" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 px-6 py-3 font-bold text-purple-100 md:py-4 md:px-8 text-xl md:text-3xl whitespace-nowrap gap-4 items-center">
            <LogoGithub width="24" class="fill-current" />
          </a>
          <a href="/discord" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 text-xl md:text-3xl whitespace-nowrap gap-4 items-center">
            <LogoDiscord width="24" class="fill-current"/>
          </a>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: '👋 Welcome to my homepage! ',
    },
    {
      name: 'og:description',
      content: 'Welcome to my homepage! Hello there! I am MattTheTekie. I am a technology expert, passionate about sharing my knowledge and insights on the latest gadgets, software, and applications. Whether youre a tech novice or a professional, youll find informative articles, tutorials, reviews, and other resources on my homepage to help you stay up-to-date with the ever-evolving world of technology.',
    },
    {
      name: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/94870997',
    },
  ],
};
