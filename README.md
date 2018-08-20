# training-cf-ui
Pivotal Developer Training Angular front-end

# login to CF
cf login -a api.run.pivotal.io

# deploy application to CF using command or using manifest file
cf push training.cf.ui -c "node server.js"
cf push -f manifest.yml

# check last logs from CF application
cf logs training.cf.ui --recent
 
# set connection alias in concourse
fly --target pivotal login --concourse-url http://127.0.0.1:8080
fly --target pivotal sync

# destroy a pipeline in concourse
fly -t pivotal destroy-pipeline --pipeline training-cf-ui

# reactive a job in concourse
fly -t pivotal unpause-job --job training-cf-ui/ci-training-cf-ui

# add a pipeline in concourse
fly -t pivotal set-pipeline -p training-cf-ui --config ./ci/pipeline.yml --load-vars-from ./ci/credentials.yml

# reactive a pipeline in concourse
fly -t pivotal unpause-pipeline -p training-cf-ui

# debug a task pipeline/job in concourse
fly -t pivotal intercept -j training-cf-ui/ci-training-cf-ui -s build-training-cf-ui

# get task output job in concourse 
fly -t pivotal watch -j training-cf-ui/ci-training-cf-ui

# list all builds in concourse
fly -t pivotal builds

# update pipeline in concourse
fly sp -t pivotal -p training-cf-ui -c ./ci/pipeline.yml -l ./ci/credentials.yml

# trigger a job in concourse
fly -t pivotal trigger-job -j training-cf-ui/ci-training-cf-ui

# trigger a job and watch output in concours
fly -t pivotal trigger-job -w -j training-cf-ui/ci-training-cf-ui
