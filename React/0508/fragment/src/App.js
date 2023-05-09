import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <div>
      <dt>사과</dt>
      <dd>사과</dd>
    </div>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem />
      <ListItem />
      <ListItem />
    </dl>
  );
}

function App() {
  return (
		<div>
			<h1>안녕, 라이캣 1호!</h1>
			<h2>안녕, 라이캣 2호!</h2>
      <Glossary />
		</div>
  );
}
export default App;
