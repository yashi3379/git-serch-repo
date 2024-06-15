import React from 'react';
import { Repo } from '../../../types/ Repo';
import RepoItem from '../../molecules/Repo/RepoItem';
import { FaSearch } from 'react-icons/fa';

interface RepoListProps {
  repos: Repo[];
  fillterText: string;
}

const RepoList: React.FC<RepoListProps> = ({ repos,fillterText }) => {
  if (repos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-4 text-gray-600">
        <FaSearch className="text-6xl mb-4" />
        <p className="text-xl">No repositories found</p>
        <p className="text-md">Try adjusting your search criteria</p>
      </div>

    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map(repo => (
        <RepoItem key={repo.full_name} repo={repo} filterText={fillterText} />
      ))}
    </div>
  );
};

export default RepoList;
