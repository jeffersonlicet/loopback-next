// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-graphql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {createRestAppClient, givenHttpServerConfig} from '@loopback/testlab';
import {GraphqlDemoApplication} from '../../';
import {runTests} from './graphql-tests';

describe('GraphQL middleware', () => {
  let app: GraphqlDemoApplication;

  before(giveAppWithGraphQLMiddleware);
  after(stopApp);

  runTests(() => createRestAppClient(app));

  async function giveAppWithGraphQLMiddleware() {
    app = new GraphqlDemoApplication({rest: givenHttpServerConfig()});
    await app.boot();
    await app.start();
    return app;
  }

  async function stopApp() {
    await app?.stop();
  }
});
