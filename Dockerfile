FROM registry.access.redhat.com/rhscl/nginx-114-rhel7
# FROM image-registry.openshift-image-registry.svc:5000/openshift/nginx:1.14

ARG build_url=default
ARG git_commit=default
ARG git_url=default

LABEL labs.build.url="${build_url}" \
      labs.git.tag="${git_commit}" \
      labs.git.url="${git_url}"

COPY nginx.conf /etc/opt/rh/rh-nginx114/nginx/nginx.conf
COPY dist $HOME
CMD ["nginx", "-g", "daemon off;"]
