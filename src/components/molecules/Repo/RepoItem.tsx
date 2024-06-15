import React from 'react';
import { Repo } from '../../../types/ Repo';
import { FaClock, FaCodeBranch, FaStar, } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import ProgramLanguage from '../../atoms/ProgramLanguage';


/*export interface Owner {
  login: string;
  avatar_url: string;
}

export interface Repo {
  full_name: string;
  name: string;
  description: string | null;
  html_url: string;
  owner: Owner;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}
*/


const highlightText = (text: string, highlight: string) => {
  if (!highlight.trim()) {
    return [<span>{text}</span>];
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? <span key={index} className="bg-yellow-200">{part}</span> : part
  );
};


const getRepoColor = (stars: number) => {
  if (stars > 1000) {
    return 'border-red-500';
  } else if (stars > 300) {
    return 'border-orange-500';
  } else if (stars > 50) {
    return 'border-yellow-500';
  } else {
    return 'border-green-500';
  }
};


const RepoItem: React.FC<{ repo: Repo; filterText: string }> = ({ repo, filterText }) => {
  const repoColor = getRepoColor(repo.stargazers_count);

  return (
    <div className={`p-4 my-2 bg-white rounded-md shadow-md border-l-4 ${repoColor} flex flex-col`}>
      <div className="flex items-center mb-2">
        <a href={`https://github.com/${repo.owner.login}`} target="_blank" rel="noopener noreferrer " >
          <img src={repo.owner.avatar_url} alt={`${repo.owner.login}'s avatar`} className="h-10 w-10 rounded-full mr-4 hover:opacity-80" />
        </a>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-500 hover:underline">
          {highlightText(repo.name, filterText)}
        </a>
      </div>
      <div className="flex items-center mb-2">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="mr-4">{repo.stargazers_count}</span>
        <AiOutlineEye className="text-gray-500 mr-1" />
        <span className="mr-4">{repo.watchers_count}</span>
        <FaCodeBranch className="text-gray-500 mr-1" />
        <span>{repo.forks_count}</span>
      </div>
      <div className="mb-2">
        {highlightText(repo.description || '', filterText)}
      </div>
      <div className="mb-2 text-sm text-gray-600">
      <span className="flex items-center">Language: <ProgramLanguage language={repo.language} /></span>
        <span className="block">owner: {repo.owner.login}</span>
        {repo.homepage && (
          <span className="block">HP: <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{repo.homepage}</a></span>
        )}
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <FaClock className="mr-1" />
        <span>{repo.updated_at}</span>
      </div>
    </div>
  );
};

export default RepoItem;
