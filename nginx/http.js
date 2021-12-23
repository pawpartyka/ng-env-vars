export default {
  env: request => {
    const env = Object
      .entries(process.env)
      .filter(it => it[0].startsWith('NG_APP_') || it[0] === 'NODE_ENV')
      .reduce((prev, it) => Object.assign(prev, { [it[0]]: it[1] }), {});

    request.return(200, `<script>window['env'] = ${ JSON.stringify(env) }</script>`);
  },
};
