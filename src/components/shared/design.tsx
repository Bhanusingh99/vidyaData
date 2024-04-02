import * as React from "react";

export function MyComponent() {
  return (
    <div className="flex overflow-hidden relative flex-col items-start pr-5 pl-11 max-w-[516px] min-h-[513px] max-md:pl-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28933a49e213f01f945b0077d6fef0e71392664916f31ed78275febbcf192721?apiKey=edb036b8e52f482c82517694e3fba935&"
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d610193a652a5ecf47180f10999420c86a854cd3f88981a5765b90818875fb38?apiKey=edb036b8e52f482c82517694e3fba935&"
        className="mt-1 aspect-[0.91] w-[61px]"
        alt=""
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e6e62a6515a702c285306fe37e2e8460c81f6b084399751356f1e1c2776493?apiKey=edb036b8e52f482c82517694e3fba935&"
        className="mt-32 ml-20 w-16 aspect-square max-md:mt-10 max-md:ml-2.5"
        alt=""
      />
      <div className="flex relative gap-5 justify-between self-stretch px-0.5 mt-48 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f10f7e70e659ea1d5f35e5ce8ad5ffd5867289baa9b0ce20e56f45aa6b8be8b2?apiKey=edb036b8e52f482c82517694e3fba935&"
          className="shrink-0 my-auto aspect-square w-[39px]"
          alt=""
        />
        <div className="flex gap-5 justify-between">
          <div className="shrink-0 w-px bg-gray-200 border border-gray-200 border-solid h-[66px]" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/928754bf05b700743be292c6d859ed09decd628d0d32ccccde558fe65eb94fbb?apiKey=edb036b8e52f482c82517694e3fba935&"
            className="shrink-0 my-auto aspect-square w-[39px]"
            alt=""
          />
        </div>
        <div className="flex gap-4 justify-between text-xs leading-8 whitespace-nowrap text-slate-900">
          <div className="shrink-0 w-px bg-gray-200 border border-gray-200 border-solid h-[66px]" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6551927eb55e61f54ea034e0a64ff012971b805c39f9f4c26c0265ce7d145404?apiKey=edb036b8e52f482c82517694e3fba935&"
            className="shrink-0 my-auto aspect-square w-[39px]"
            alt=""
          />
          <div className="self-end mt-11 max-md:mt-10">Followers</div>
        </div>
      </div>
    </div>
  );
}