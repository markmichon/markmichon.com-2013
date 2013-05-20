require 'rubygems'
require 'rake'

# Rsync Deployment Config Settings #

# ssh_shortcut = "markmichon"
# local_path = "_site/"
# remote_path = "public_html/"
# rsync_args = "-avz"

# Deployment #
desc "rsync contents to server"
task :deploy do
  puts 'Pushing files to markmichon.com'
  sh 'rsync -avz _site/ markmichon:public_html/'
end