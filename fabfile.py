from fabric.api import *
from fabric.contrib.console import confirm

# ============================================================================#
# Configuration options start                                                 #
# ============================================================================#

# Run unit tests prior to deployment
unit_test = False

# Staging and live servers to deploy to
live_servers = ['samus.cldndigital.com']
staging_servers = ['']
staging_username = 'production'

# Paths on servers where SVN will checkout
staging_path = ''
live_path = '/home/production/public_html/anz_pitch'

# ============================================================================#
# Configuration options end                                                   #
# ============================================================================#

deploy_to = ""

def test():
    with settings(warn_only=True):
        result = local("cd tests; phpunit")
        if result.failed and not confirm("Tests failed. Continue anyway?"):
            abort("Aborting at user request.")


def deploy():
    if unit_test == True:
        test()
    path = ""
    if (deploy_to == 'production'):
        path = live_path
    else:
        path = staging_path
    run("svn update %s" % path)


def live():
    global deploy_to
    deploy_to = 'production'
    env.user = 'production'
    env.hosts = live_servers


def staging():
    global deploy_to
    deploy_to = 'staging'
    env.user = staging_username
    env.hosts = staging_servers
