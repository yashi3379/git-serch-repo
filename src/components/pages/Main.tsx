import React from 'react'
import useGitHubSearch from '../../hooks/useGithubSearch'
import RepoList from '../organisms/Repo/RepoList';
import HeaderParts from '../organisms/header/HeaderParts';

import SearchBarAndFillterBar from '../organisms/SearchAndFillterBar';
import { FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

const Main: React.FC = () => {

    //カスタムフック
    const { repos, loading, error, handleSearch, handleFilter, filterText, handleClear } = useGitHubSearch();


    return (
        <div>
            <HeaderParts />
            <SearchBarAndFillterBar onSearch={handleSearch} onFilter={handleFilter} onClear={handleClear} />
            {loading &&
                <div className="flex justify-center items-center">
                    <FaSpinner className="text-4xl text-blue-500 animate-spin" />
                </div>
            }
            {error &&
                <div className="flex flex-col justify-center items-center mt-10 text-red-500">
                    <FaExclamationTriangle className="text-4xl mb-4" />
                    <p className="text-xl">An error occurred</p>
                    <p className="text-md">{error}</p>
                </div>
            }
            <RepoList repos={repos} fillterText={filterText} />

        </div>
    )
}

export default Main