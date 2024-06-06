import { useState } from "react";

const tableAllData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [tableData, setTableData] = useState(tableAllData);
  const sortByDate = () => {
    let tempData = [...tableAllData];
    tempData.sort((curr, next) => {
      let factor = new Date(next.date) - new Date(curr.date);
      if (factor === 0) {
        factor = next.views - curr.views;
      }
      return factor;
    });

    setTableData(() => [...tempData]);
  };

  const sortByViews = () => {
    let tempData = [...tableAllData];
    tempData.sort((curr, next) => {
      let factor = next.views - curr.views;
      if (factor === 0) {
        factor = new Date(next.date) - new Date(curr.date);
      }
      return factor;
    });

    setTableData(() => [...tempData]);
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={`row-${index + 1}`}>
              <td>{data.date}</td>
              <td>{data.views}</td>
              <td>{data.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
