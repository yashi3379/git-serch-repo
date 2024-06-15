import { useState, useEffect } from 'react';
import axios from 'axios';
import { Repo } from '../types/ Repo';

/**
 * useGitHubSearch - GitHubリポジトリ検索のカスタムフック
 * 
 * @returns {object} - フックの状態とハンドラ関数を含むオブジェクト
 * - repos: フィルタリングされたリポジトリのリスト
 * - loading: データ取得中の状態
 * - error: エラーメッセージ
 * - handleSearch: 検索を実行する関数
 * - handleFilter: フィルタリングを実行する関数
 */
const useGitHubSearch = () => {
  // 検索クエリの状態
  const [searchText, setSearchText] = useState<string>('');
  // 検索結果のリポジトリリストの状態
  const [repos, setRepos] = useState<Repo[]>([]);
  // ローディング状態
  const [loading, setLoading] = useState<boolean>(false);
  // エラー状態
  const [error, setError] = useState<string | null>(null);
  // フィルタリングテキストの状態
  const [filterText, setFilterText] = useState<string>('');

  // searchTextが変更されたときにリポジトリを検索するエフェクト
  useEffect(() => {
    if (searchText === '') return;

    const fetchRepos = async () => {
      setLoading(true);
      setError(null);

      try {
        // GitHub APIからリポジトリを取得
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchText}&per_page=100`);
        setRepos(response.data.items);
      } catch (error) {
        setError('Error fetching repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [searchText]);

  /**
   * handleSearch - 検索テキストを設定し、検索を実行する関数
   * 
   * @param {string} text - 検索クエリ
   */
  const handleSearch = (text: string) => {
    setSearchText(text);
    setFilterText(''); // フィルターテキストをリセット
  };

  /**
   * handleFilter - フィルタリングテキストを設定する関数
   * 
   * @param {string} text - フィルタリングテキスト
   */
  const handleFilter = (text: string) => {
    setFilterText(text);
  };

  // フィルタリングされたリポジトリのリストを取得
  const filteredRepos = repos.filter(repo =>
    repo.full_name.toLowerCase().includes(filterText.toLowerCase()) || 
    repo.description?.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleClear = () => {
    setSearchText('');
    setRepos([]);
    setFilterText('');
  };

  // フックの戻り値
  return { repos: filteredRepos, loading, error, handleSearch, handleFilter, filterText, handleClear};
};

export default useGitHubSearch;
