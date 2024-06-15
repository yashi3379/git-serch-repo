import React from 'react';
import { FaJsSquare, FaPython, FaJava, FaPhp, FaRust, FaSwift, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiCsharp, SiCplusplus, SiGo, SiKotlin, SiRuby } from 'react-icons/si';

interface ProgramLanguageProps {
  language: string | null;
}

const ProgramLanguage: React.FC<ProgramLanguageProps> = ({ language }) => {
  if (!language) {
    return null;
  }

  const renderLanguage = () => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return <div className="flex items-center text-yellow-500"><FaJsSquare className="mr-1" /> JavaScript</div>;
      case 'typescript':
        return <div className="flex items-center text-blue-500"><SiTypescript className="mr-1" /> TypeScript</div>;
      case 'python':
        return <div className="flex items-center text-blue-400"><FaPython className="mr-1" /> Python</div>;
      case 'java':
        return <div className="flex items-center text-red-500"><FaJava className="mr-1" /> Java</div>;
      case 'php':
        return <div className="flex items-center text-purple-500"><FaPhp className="mr-1" /> PHP</div>;
      case 'ruby':
        return <div className="flex items-center text-red-500"><SiRuby className="mr-1" /> Ruby</div>;
      case 'swift':
        return <div className="flex items-center text-orange-500"><FaSwift className="mr-1" /> Swift</div>;
      case 'html':
        return <div className="flex items-center text-orange-600"><FaHtml5 className="mr-1" /> HTML</div>;
      case 'css':
        return <div className="flex items-center text-blue-600"><FaCss3Alt className="mr-1" /> CSS</div>;
      case 'c#':
        return <div className="flex items-center text-green-500"><SiCsharp className="mr-1" /> C#</div>;
      case 'c++':
        return <div className="flex items-center text-blue-600"><SiCplusplus className="mr-1" /> C++</div>;
      case 'go':
        return <div className="flex items-center text-teal-500"><SiGo className="mr-1" /> Go</div>;
      case 'kotlin':
        return <div className="flex items-center text-purple-500"><SiKotlin className="mr-1" /> Kotlin</div>;
      case 'rust':
        return <div className="flex items-center text-orange-500"><FaRust className="mr-1" /> Rust</div>;
      case 'sql':
        return <div className="flex items-center text-blue-800"><FaDatabase className="mr-1" /> SQL</div>;
      default:
        return <div className="flex items-center text-gray-600">{language}</div>;
    }
  };

  return <div>{renderLanguage()}</div>;
};

export default ProgramLanguage;
