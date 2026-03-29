<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { siteIndexEntries } from '@/data/siteIndex'

useHead({
  title: '航海索引',
})
</script>

<template>
  <main
    id="main-content"
    class="relative z-1 mx-auto min-h-100vh max-w-1180px px-16px pb-28px pt-18px md:px-28px md:pb-36px md:pt-24px"
  >
    <section class="grid gap-12px lg:grid-cols-[minmax(0,1fr)_300px]">
      <article class="overflow-hidden rounded-30px border border-solid border-white/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(207,230,255,0.1))] px-14px pb-14px pt-12px shadow-[0_22px_52px_rgba(45,103,171,0.12)] backdrop-blur-5px md:px-18px md:pb-18px md:pt-14px">
        <div class="mt-14px rounded-24px border border-solid border-white/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(240,248,255,0.6))] px-14px py-12px text-[#184a8b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] md:px-18px md:py-14px">
          <div class="flex items-center gap-12px">
            <div class="flex h-42px w-42px shrink-0 items-center justify-center rounded-full bg-[#2c6fbc] text-16px font-700 text-white shadow-[0_8px_18px_rgba(44,111,188,0.2)]">
              航
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-10px uppercase tracking-[0.32em] text-[#5f8fc7]">
                Summer Station
              </p>
              <h1 class="mt-3px truncate text-20px font-[special-event] leading-none md:text-26px">
                老船长 PZ_Jack 的航海索引
              </h1>
            </div>
          </div>
        </div>

        <div class="mt-10px flex flex-wrap items-center gap-x-14px gap-y-6px px-4px text-10px text-sky-900/68">
          <span>晴空站台上的常用入口总表</span>
          <span>Ciallo ～(∠・ω&lt; )⌒★! </span>
          <span>这里存放了老船长PZ_Jack的一些网站索引</span>
        </div>
      </article>

      <aside class="rounded-28px border border-solid border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(187,220,255,0.08))] p-14px shadow-[0_18px_40px_rgba(45,103,171,0.08)] backdrop-blur-5px md:p-16px">
        <p class="text-9px uppercase tracking-[0.34em] text-sky-700/72">
          Station Memo
        </p>
        <h2 class="mt-6px text-15px text-sky-950/88">
          公告
        </h2>
        <p class="mt-8px text-11px leading-1.7 text-sky-900/72">
          兼具梦想和现实的世界。满怀美梦的现实主义者这句话打从一开始就不存在矛盾。
        </p>
        <pre class="mt-10px overflow-x-auto rounded-18px border border-solid border-white/16 bg-white/10 p-10px text-10px leading-1.75 text-sky-800/88 whitespace-pre-wrap">A Pragmatistic Dreamer.</pre>
      </aside>
    </section>

    <section class="mt-12px overflow-hidden rounded-30px border border-solid border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(184,217,255,0.08))] shadow-[0_22px_54px_rgba(45,103,171,0.1)] backdrop-blur-5px">
      <div class="grid grid-cols-[70px_minmax(0,1fr)_72px] border-b border-solid border-white/18 bg-[rgba(255,255,255,0.12)] px-12px py-10px text-9px uppercase tracking-[0.28em] text-sky-800/58 md:grid-cols-[92px_minmax(0,1fr)_84px] md:px-16px">
        <span>Line</span>
        <span>Destination</span>
        <span class="text-right">Gate</span>
      </div>

      <div class="px-12px py-10px md:px-16px md:py-12px">
        <div>
          <p class="text-9px uppercase tracking-[0.34em] text-sky-700/72">
            Captain's Routes
          </p>
          <h2 class="mt-5px text-15px text-sky-950/86 md:text-16px">
            当前索引一览
          </h2>
        </div>
        <p class="mt-4px text-10px text-sky-800/60">
          共 {{ siteIndexEntries.length }} 条航线
        </p>

        <div class="mt-10px overflow-hidden rounded-24px border border-solid border-white/14 bg-[rgba(255,255,255,0.08)]">
          <a
            v-for="(entry, index) in siteIndexEntries"
            :key="entry.name"
            :href="entry.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group grid grid-cols-[70px_minmax(0,1fr)_72px] items-center gap-10px border-b border-solid border-white/10 px-10px py-10px no-underline transition-all duration-250 last:border-b-0 hover:bg-white/10 md:grid-cols-[92px_minmax(0,1fr)_84px] md:px-14px md:py-12px"
          >
            <div class="flex items-center gap-8px">
              <span class="flex h-26px min-w-26px items-center justify-center rounded-full border border-solid border-white/18 bg-white/12 text-10px text-sky-900/78">
                {{ index + 1 }}
              </span>
              <span class="truncate text-10px tracking-[0.18em] text-sky-800/62">
                LINE
              </span>
            </div>

            <div class="min-w-0">
              <p class="truncate text-13px text-sky-950/86 group-hover:text-sky-700">
                {{ entry.name }}
              </p>
              <p class="mt-3px truncate text-10px leading-1.6 text-sky-800/66 md:text-11px">
                {{ entry.description }}
              </p>
            </div>

            <div class="text-right">
              <p class="text-10px tracking-[0.2em] text-sky-700/52">
                EXIT
              </p>
              <p class="mt-3px truncate text-10px text-sky-700/82 md:text-11px">
                {{ entry.url }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
