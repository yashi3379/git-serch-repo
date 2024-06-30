import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';

//検索ボックスとフィルターボックスを表示するコンポーネント

//propsの型定義
interface SearchAndFillterBarProps {
    onSearch: (searchText: string) => void;
    onFilter: (filterText: string) => void;
    onClear: () => void;
    filterText: string;
}



const SearchAndFillterBar: React.FC<SearchAndFillterBarProps> = ({ onSearch, onFilter, onClear, filterText }) => {

    const [searchText, setSearchText] = useState<string>('');
    const [isFilterEnabled, setIsFilterEnabled] = useState<boolean>(false);

    //検索ボタンをクリックした時の処理
    const handleSearchClick = () => {
        onSearch(searchText);
        setIsFilterEnabled(true);
    }

    //Enterキーを押した時の処理
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(searchText);
            setIsFilterEnabled(true);
        }
    }

    //クリアボタンをクリックした時の処理
    const handleClearClick = () => {
        setSearchText('');
        onClear();
        setIsFilterEnabled(false);
    };



    return (
        <div className="flex flex-col items-center my-4 ">
            <div className="flex items-center mb-2 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search GitHub repositories"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="p-2 h-12 flex-grow border border-gray-300 rounded-l-md 
                        focus:outline-none focus:shadow-inner-blue" style={{ flexGrow: 2 }}
                />
                <button
                    onClick={handleSearchClick}
                    className="p-2 h-12 bg-blue-500 text-white rounded-r-md 
                        flex items-center justify-center hover:bg-blue-400"
                    style={{ minWidth: '3rem' }}
                >
                    <FaSearch className='text-xl' />
                </button>
                {searchText && (
                    <button
                        onClick={handleClearClick}
                        className="p-2 h-12 bg-red-500 text-white rounded-md hover:bg-red-400 flex items-center justify-center ml-2"
                        style={{ minWidth: '3rem', padding: '0 1rem' }}
                    >
                        <FaTimes className="text-xl" />
                    </button>
                )}
            </div>
            <input
                type="text"
                placeholder="Filter"
                value={filterText}
                onChange={e => onFilter(e.target.value)
                }
                className="p-2 border border-gray-300 rounded-md 
                focus:outline-none focus:shadow-inner-blue w-full max-w-md"
                disabled={!isFilterEnabled}
            />
        </div>
    )
}

export default SearchAndFillterBar