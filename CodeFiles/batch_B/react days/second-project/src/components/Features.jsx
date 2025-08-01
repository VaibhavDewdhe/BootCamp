function Features(prs) {
  return <ul>
    {
        prs.features.map(function (item){
            return <li>{item}</li>;
        })
    }
  </ul>;
}

export default Features;
