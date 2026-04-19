import React from "react";

const socials = [
  {
    name: "Instagram",
    handle: "@woor.arts",
    url: "https://instagram.com",
    borderHover: "hover:border-pink-400/50",
    shadow: "hover:shadow-pink-500/10",
    iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    iconColor: "text-pink-400",
    arrowHover: "group-hover:text-pink-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    handle: "@woor_arts",
    url: "https://pinterest.com",
    borderHover: "hover:border-red-400/50",
    shadow: "hover:shadow-red-500/10",
    iconBg: "bg-red-500/10 group-hover:bg-red-500/20",
    iconColor: "text-red-400",
    arrowHover: "group-hover:text-red-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    handle: "woor-arts",
    url: "https://behance.net",
    borderHover: "hover:border-blue-400/50",
    shadow: "hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
    arrowHover: "group-hover:text-blue-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.971 13h5.269c-.089-1.1-.669-2.085-2.57-2.085-1.907 0-2.527.992-2.699 2.085zM8 8c1.54 0 3.302.082 3.302 2.23 0 1.485-.96 1.983-1.518 2.065.789.097 1.99.498 1.99 2.325 0 2.415-1.936 2.38-3.654 2.38H0V8h8zm-.891 3.754H2.182v1.878h4.927c.916 0 .916-1.878 0-1.878zm0-2.96H2.182v1.777h4.927c.916 0 .916-1.777 0-1.777z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Woor Arts",
    url: "https://facebook.com",
    borderHover: "hover:border-blue-500/50",
    shadow: "hover:shadow-blue-600/10",
    iconBg: "bg-blue-600/10 group-hover:bg-blue-600/20",
    iconColor: "text-blue-500",
    arrowHover: "group-hover:text-blue-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const SocialMedia = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold tracking-wider">Social Media</h1>
        <p className="text-gray-500 text-sm mt-1">Follow my work and stay updated</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-pink-900/30 border border-indigo-500/20 rounded-2xl p-6 mb-8 text-center">
        <p className="text-gray-300 text-sm leading-relaxed">
          Follow across platforms to see the latest artwork, process videos, and updates.
          DMs are open for collaborations and commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 bg-gray-900 border border-gray-700 ${s.borderHover} rounded-2xl p-5 transition-all duration-200 hover:shadow-lg ${s.shadow} hover:scale-[1.02]`}
          >
            <div className={`w-13 h-13 p-3 ${s.iconBg} ${s.iconColor} rounded-2xl flex-shrink-0 transition-colors duration-200`}>
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">{s.name}</p>
              <p className="text-gray-500 text-xs mt-0.5 truncate">{s.handle}</p>
            </div>
            <svg className={`w-4 h-4 text-gray-600 ${s.arrowHover} transition-colors duration-200 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
