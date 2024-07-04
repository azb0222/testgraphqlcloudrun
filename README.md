## DEPLOYMENT TO GCP CLOUD FUNCTION

- deploying with GCP CLI: `gcloud functions deploy graphql-playground --entry-point handler --runtime nodejs20 --trigger-http --set-build-env-vars=NODE_ENV=development`
  - say `y` for `Allow unauthenticated invocations of new function [graphql-playground]? (y/N)?`
  - remove NODE_ENV=development if a prod server
  - can deploy from github repo by doing `--source xx` flag for now until Cloud Build is setup https://cloud.google.com/functions/docs/deploy#from-source-repo <TODO: test this>

## TODO: might need to pass "request specific information about a currently exeucting GCP" for auth shit? see https://www.apollographql.com/docs/apollo-server/v3/deployment/gcp-functions/ "Getting request details"


- deploy from source repo 
- setup sql using serverless vpc connector



steps:
0) do sample tutorial of hooking up cloud function with managed sql (understand all the options in terms of networking, whats happening)  
1) get prisma client working with google managed sql 
2) integrate into graphqlplayground 
3) redeploy as gcp cloud function to see if it works
4) build terraform for all this 